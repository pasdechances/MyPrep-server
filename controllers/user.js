const User = require('../models/user');
//const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

exports.createUser = (req, res, next) => {

  console.log(req.body)
  var loginOk = true;
  if(req.body.login === undefined || req.body.login === ''){
    console.log('login vide');
    return res.status(403).json({
      error: 'login is empty :('
    });
  } else {
    
        User.findOne({
          login: req.body.login
        }).then(
          (user) => {
            
            if(user == null) {
              console.log('login is null');
              var loginOk = false;
            } else {
              return res.status(403).json({
              error: 'login already exist !'
              });
              var loginOk = false;
            }
          }
        ).catch(
          (error) => {
            res.status(404).json({
              error: error
            });
          }
        );
  }

  if(req.body.firstname === undefined || req.body.firstname === ''){
    console.log('firstname vide');
    return res.status(403).json({
      error: 'firstname is empty :('
    });
  }

  if(req.body.lastname === undefined || req.body.lastname === ''){
    console.log('lastname vide');
    return res.status(403).json({
      error: 'lastname is empty :('
    });
  }

  if(req.body.password === undefined || req.body.password === ''){
    console.log('password vide');
    return res.status(404).json({
      error: 'password is empty :('
    });
  }

  const user = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    login: req.body.login,
    password: req.body.password,
  });

  if (loginOk === true ){
    user.save().then(
      () => {
        res.status(201).json({
          message: 'Post saved successfully!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  }




};

exports.getOneUser = (req, res, next) => {
  User.findOne({
    login: req.params.id
  }).then(
    (user) => {
      res.status(200).json(user);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};

exports.modifyUser = (req, res, next) => {
  const user = new User({
    _id: req.params.id,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    login: req.body.login,
    password: req.body.password,
  });
  User.updateOne({_id: req.params.id}, user).then(
    () => {
      res.status(201).json({
        message: 'User updated successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.deleteUser = (req, res, next) => {
  User.deleteOne({_id: req.params.id}).then(
    () => {
      res.status(200).json({
        message: 'Deleted!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.getAllUsers = (req, res, next) => {
  console.log("get all user request")
  sleep(1)
  User.find().then(
    (users) => {
      res.status(200).json(users);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

function sleep(seconds)
{
  var waitTill = new Date(new Date().getTime() + seconds * 1000);
  while(waitTill > new Date()){}
}

exports.login = (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then(user => {
      if (!user) {
        return res.status(401).json({ error: 'Utilisateur non trouvé !' });
      }
      bcrypt.compare(req.body.password, user.password)
        .then(valid => {
          if (!valid) {
            return res.status(401).json({ error: 'Mot de passe incorrect !' });
          }
          res.status(200).json({
            userId: user._id,
            token: jwt.sign(
              { userId: user._id },
              'RANDOM_TOKEN_SECRET',
              { expiresIn: '24h' }
            )
          });
        })
        .catch(error => res.status(500).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};