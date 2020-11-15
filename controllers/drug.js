const Drug = require('../models/drug');
const bodyParser = require('body-parser');
//const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.newDrug = (req, res, next) => {

  console.log(req.body)

  const drug = new Drug({
    name: req.body.name,
    barcode: req.body.barcode,
    refund: req.body.refund,
    labo: req.body.labo
  });

  if(drug.name === undefined || drug.name === ''){
    console.log('name drug vide');
    return res.status(403).json({
      error: 'name drug  is empty :('
    });
  }

  if(drug.barcode === undefined || drug.barcode === ''){
    console.log('barcode vide');
    return res.status(403).json({
      error: 'barcode is empty :('
    });
  }

  if(drug.refund === undefined || drug.refund === ''){
    console.log('refund vide');
    return res.status(404).json({
      error: 'refund is empty :('
    });
  }

  if(drug.labo === undefined || drug.labo === ''){
    console.log('labo vide');
    return res.status(404).json({
      error: 'labo is empty :('
    });
  }

  Drug.findOne({login: drug.login}, function(err , drugs){
    createDrug(drug).then(
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


createDrug = (param) => {
    drug = new Drug(param)  
    return drug.save()
  }
  exports.createDrug = createDrug

exports.getOneDrug = (req, res, next) => {
console.log(req.params.id)
Drug.findOne({
    _id: req.params.id
}).then(
    (drug) => {
    res.status(200).json(drug);
    }
).catch(
    (error) => {
    res.status(404).json({
        error: error
    });
    }
);
};

exports.modifyDrug = (req, res, next) => {
    const drug = new Drug({
      _id: req.params.id,
      name: req.body.name,
      barcode: req.body.barcode,
      refund: req.body.refund,
      labo: req.body.labo
    });
    Drug.updateOne({_id: req.params.id}, drug).then(
      () => {
        res.status(201).json({
          message: 'Drug updated successfully!'
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


  exports.deleteDrug = (req, res, next) => {
    Drug.deleteOne({_id: req.params.id}).then(
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


  exports.getAllDrugs = (req, res, next) => {
    console.log("get all drugs request")
    Drug.find().then(
      (drugs) => {
        res.status(200).json(drugs);
      }
    ).catch((res,error) => {
      res.status(400).json({
        error: error
      });
    }
    );
  };