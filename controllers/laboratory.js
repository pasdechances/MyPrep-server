const Laboratory = require('../models/laboratory');
const bodyParser = require('body-parser');
//const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.newLaboratory = (req, res, next) => {

  console.log(req.body)

  const laboratory = new Laboratory({
    certBpf: req.body.certBpf,
    certAnalyse: req.body.certAnalyse,
    codeClient: req.body.codeClient,
    francoport: req.body.francoport,
    rfa: req.body.rfa,
    url: req.body.url,
    discount: req.body.discount,
    message: req.body.message,
    name: req.body.name,
    town: req.body.town,
    postalCode: req.body.postalCode,
    country: req.body.country,
    mail: req.body.mail,
    phone: req.body.phone,
    enable: req.body.enable
  });

  if(laboratory.name === undefined || laboratory.name === ''){
    console.log('name laboratory vide');
    return res.status(403).json({
      error: 'name laboratory  is empty :('
    });
  }


  Laboratory.findOne({login: laboratory.login}, function(err , laboratories){
    createLaboratory(laboratory).then(
      () => {
        // on a pu creer le laboratory fait un truc
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


createLaboratory = (param) => {
    laboratory = new Laboratory(param)  
    return laboratory.save()
  }
  exports.createLaboratory = createLaboratory

exports.getOneLaboratory = (req, res, next) => {
console.log(req.params.id)
Laboratory.findOne({
    _id: req.params.id
}).then(
    (laboratory) => {
    res.status(200).json(laboratory);
    }
).catch(
    (error) => {
    res.status(404).json({
        error: error
    });
    }
);
};

exports.modifyLaboratory = (req, res, next) => {
    const laboratory = new Laboratory({
      _id: req.params.id,
      certBpf: req.body.certBpf,
      certAnalyse: req.body.certAnalyse,
      codeClient: req.body.codeClient,
      francoport: req.body.francoport,
      rfa: req.body.rfa,
      url: req.body.url,
      discount: req.body.discount,
      message: req.body.message,
      name: req.body.name,
      town: req.body.town,
      postalCode: req.body.postalCode,
      country: req.body.country,
      mail: req.body.mail,
      phone: req.body.phone,
      enable: req.body.enable
    });
    Laboratory.updateOne({_id: req.params.id}, laboratory).then(
      () => {
        res.status(201).json({
          message: 'Laboratory updated successfully!'
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


  exports.deleteLaboratory = (req, res, next) => {
    Laboratory.deleteOne({_id: req.params.id}).then(
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


  exports.getAllLaboratories = (req, res, next) => {
    console.log("get all laboratories request")
    Laboratory.find().then(
      (laboratories) => {
        res.status(200).json(laboratories);
      }
    ).catch((res,error) => {
      res.status(400).json({
        error: error
      });
    }
    );
  };