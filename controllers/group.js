const Group = require('../models/group');
//const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

exports.newGroup = (req, res, next) => {

  console.log(req.body)

  const group = new Group({
    name: "Utilisateur",
    rights: {
        userEditable: false,
        groupEditable: false,
        priceEditable: false,
        stockUsable: true,
        saleUsable: true,
        paramUsable: false,
        teletransmissionUsable: false,
        vaccinationAllow: false,
    } 
  });

    Group.findOne({login: group.login}, function(err , groups){
      console.log(groups)
      if(!groups){
        createGroup.then(
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
  
};

exports.createGroup = (group) => {
  return group.save()
}

exports.getOneGroup = (req, res, next) => {
  Group.findOne({
    id: req.params.id
  }).then(
    (group) => {
      res.status(200).json(group);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};

exports.modifyGroup = (req, res, next) => {
  const group = new Group({
    _id: req.params.id,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    login: req.body.login,
    password: req.body.password,
  });
  Group.updateOne({_id: req.params.id}, group).then(
    () => {
      res.status(201).json({
        message: 'Group updated successfully!'
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

exports.deleteGroup = (req, res, next) => {
  Group.deleteOne({_id: req.params.id}).then(
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

exports.getAllGroups = (req, res, next) => {
  console.log("get all group request")
  sleep(1)
  Group.find().then(
    (groups) => {
      res.status(200).json(groups);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

