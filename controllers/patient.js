const Patient = require('../models/patient');
const bodyParser = require('body-parser');
//const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.newPatient = (req, res, next) => {

  console.log(req.body)

  const patient = new Patient({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    birthdayDate: req.body.birthdayDate,
    sex: req.body.sex,
    weight: req.body.weight,
    enable: req.body.enable,
    patientType: req.body.patientType,
    message: req.body.message,
    address: req.body.address,
    town: req.body.town,
    postalCode: req.body.postalCode,
    country: req.body.country,
    mail: req.body.mail,
    phone: req.body.phone,
    vitaleCard: req.body.vitaleCard,
    mutual: req.body.mutual
  });

  if(patient.firstname === undefined || patient.firstname === ''){
    console.log('firstname patient vide');
    return res.status(403).json({
      error: 'firstname patient  is empty :('
    });
  }

  if(patient.lastname === undefined || patient.lastname === ''){
    console.log('lastname patient vide');
    return res.status(403).json({
      error: 'lastname patient  is empty :('
    });
  }

  Patient.findOne({login: patient.login}, function(err , patients){
    createPatient(patient).then(
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


createPatient = (param) => {
    patient = new Patient(param)  
    return patient.save()
  }
  exports.createPatient = createPatient

exports.getOnePatient = (req, res, next) => {
console.log(req.params.id)
Patient.findOne({
    _id: req.params.id
}).then(
    (patient) => {
    res.status(200).json(patient);
    }
).catch(
    (error) => {
    res.status(404).json({
        error: error
    });
    }
);
};

exports.modifyPatient = (req, res, next) => {
    const patient = new Patient({
      _id: req.params.id,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      birthdayDate: req.body.birthdayDate,
      sex: req.body.sex,
      weight: req.body.weight,
      enable: req.body.enable,
      patientType: req.body.patientType,
      message: req.body.message,
      address: req.body.address,
      town: req.body.town,
      postalCode: req.body.postalCode,
      country: req.body.country,
      mail: req.body.mail,
      phone: req.body.phone,
      vitaleCard: req.body.vitaleCard,
      mutual: req.body.mutual
    });
    Patient.updateOne({_id: req.params.id}, patient).then(
      () => {
        res.status(201).json({
          message: 'Patient updated successfully!'
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


  exports.deletePatient = (req, res, next) => {
    Patient.deleteOne({_id: req.params.id}).then(
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


  exports.getAllPatients = (req, res, next) => {
    console.log("get all patients request")
    Patient.find().then(
      (patiens) => {
        res.status(200).json(patiens);
      }
    ).catch((res,error) => {
      res.status(400).json({
        error: error
      });
    }
    );
  };