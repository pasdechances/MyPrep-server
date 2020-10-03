const User = require('../models/user');
//const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

exports.newUser = (req, res, next) => {

  console.log(req.body)

  const user = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    login: req.body.login,
    password: bcrypt.hashSync(req.body.password, global.saltRounds),
    groups: req.body.groups,
  });

  if(user.firstname === undefined || user.firstname === ''){
    console.log('firstname vide');
    return res.status(403).json({
      error: 'firstname is empty :('
    });
  }

  if(user.lastname === undefined || user.lastname === ''){
    console.log('lastname vide');
    return res.status(403).json({
      error: 'lastname is empty :('
    });
  }

  if(user.password === undefined || user.password === ''){
    console.log('password vide');
    return res.status(404).json({
      error: 'password is empty :('
    });
  }

  if(user.login === undefined || user.login === ''){
    console.log('login vide');
    return res.status(403).json({
      error: 'login is empty :('
    });
  } else {
    User.findOne({login: user.login}, function(err , users){
      console.log(users)
      if(!users){
        createUser.then(
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
      }else{
        res.status(201).json({
          message: 'login already exist!'
        });
      }         
    });
  }
};

exports.createUser = (user) => {
  return user.save()
}

exports.getOneUser = (req, res, next) => {
  User.findOne({
    id: req.params.id
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
  User.findOne({ login: req.body.username })
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
        .catch(error => res.status(500).json({ error : "Wrong Password" }));
    })
    .catch(error => res.status(500).json({ error : "Wrong User" }));
};