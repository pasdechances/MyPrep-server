const Prescriber = require('../models/prescriber');
const bodyParser = require('body-parser');
//const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.newPrescriber = (req, res, next) => {

  console.log(req.body)

  const prescriber = new Prescriber({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    title: req.body.title,
    enable: req.body.enable,
    speciality: req.body.speciality,
    message: req.body.message,
    address: req.body.address,
    town: req.body.town,
    postalCode: req.body.postalCode,
    country: req.body.country,
    mail: req.body.mail,
    phone: req.body.phone,
    finessNumber: req.body.finessNumber
  });

  if(prescriber.firstname === undefined || prescriber.firstname === ''){
    console.log('firstname patient vide');
    return res.status(403).json({
      error: 'firstname patient  is empty :('
    });
  }

  if(prescriber.lastname === undefined || prescriber.lastname === ''){
    console.log('lastname patient vide');
    return res.status(403).json({
      error: 'lastname patient  is empty :('
    });
  }

  Prescriber.findOne({login: prescriber.login}, function(err , prescribers){
    createPrescriber(prescriber).then(
      () => {
        // on a pu creer le prescriber fait un truc
        res.status(201).json({
          message: 'Post saved successfully!'
        });
      }
    ).catch((var1) => {
      console.log(var1.errors)
      // on a pas pu créer le prescriber fait un truc 
    }
    ); 
  });
    
};


createPrescriber = (param) => {
    prescriber = new Prescriber(param)  
    return prescriber.save()
  }
  exports.createPrescriber = createPrescriber

exports.getOnePrescriber = (req, res, next) => {
console.log(req.params.id)
Prescriber.findOne({
    _id: req.params.id
}).then(
    (prescriber) => {
    res.status(200).json(prescriber);
    }
).catch(
    (error) => {
    res.status(404).json({
        error: error
    });
    }
);
};

exports.modifyPrescriber = (req, res, next) => {
    const prescriber = new Prescriber({
      _id: req.params.id,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      title: req.body.title,
      enable: req.body.enable,
      speciality: req.body.speciality,
      message: req.body.message,
      address: req.body.address,
      town: req.body.town,
      postalCode: req.body.postalCode,
      country: req.body.country,
      mail: req.body.mail,
      phone: req.body.phone,
      finessNumber: req.body.finessNumber
    });
    Prescriber.updateOne({_id: req.params.id}, prescriber).then(
      () => {
        res.status(201).json({
          message: 'Prescriber updated successfully!'
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


  exports.deletePrescriber = (req, res, next) => {
    Prescriber.deleteOne({_id: req.params.id}).then(
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


  exports.getAllPrescribers = (req, res, next) => {
    console.log("get all prescribers request")
    Prescriber.find().then(
      (prescribers) => {
        res.status(200).json(prescribers);
      }
    ).catch((res,error) => {
      res.status(400).json({
        error: error
      });
    }
    );
  };