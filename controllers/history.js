const History = require('../models/history');
const bodyParser = require('body-parser');
//const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.newHistory = (req, res, next) => {

  console.log(req.body)

  const history = new History({
    date: req.body.date,
    userId: req.body.userId,
    event: req.body.event,
    info: req.body.info,
    ip: req.body.ip
  });

  if(history.event === undefined || history.event === ''){
    console.log('event history vide');
    return res.status(403).json({
      error: 'event history  is empty :('
    });
  }

  History.findOne({login: history.login}, function(err , historys){
    createHistory(history).then(
      () => {
        // on a pu creer le user fait un truc
        res.status(201).json({
          message: 'Post saved successfully!'
        });
      }
    ).catch((var1) => {
      console.log(var1.errors)
      // on a pas pu créer le user fait un truc 
    }
    ); 
  });
    
};


createHistory = (param) => {
    history = new History(param)  
    return history.save()
  }
  exports.createHistory = createHistory

exports.getOneHistory = (req, res, next) => {
console.log(req.params.id)
History.findOne({
    _id: req.params.id
}).then(
    (history) => {
    res.status(200).json(history);
    }
).catch(
    (error) => {
    res.status(404).json({
        error: error
    });
    }
);
};

  exports.getAllHistory = (req, res, next) => {
    console.log("get all history request")
    History.find().then(
      (historys) => {
        res.status(200).json(historys);
      }
    ).catch((res,error) => {
      res.status(400).json({
        error: error
      });
    }
    );
  };