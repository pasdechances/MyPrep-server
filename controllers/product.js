const Product = require('../models/product');
const bodyParser = require('body-parser');
//const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.newProduct = (req, res, next) => {

  console.log(req.body)

  const product = new Product({
    label: req.body.label,
    principeActive: req.body.principeActive,
    laboratory: req.body.laboratory,
    name: req.body.name,
    cip: req.body.cip,
    barcode: req.body.barcode,
    message: req.body.message,
    dosage: req.body.dosage,
    receptionDate: req.body.receptionDate,
    buyingPrice: req.body.buyingPrice,
    cataloguePrice: req.body.cataloguePrice,
    netPrice: req.body.netPrice,
    quantity: req.body.quantity,
  });

  if(product.label === undefined || product.label === ''){
    console.log('label product vide');
    return res.status(403).json({
      error: 'label product  is empty :('
    });
  }

  if(product.barcode === undefined || product.barcode === ''){
    console.log('barcode product vide');
    return res.status(403).json({
      error: 'barcode product  is empty :('
    });
  }

  Product.findOne({login: product.login}, function(err , products){
    createProduct(product).then(
      () => {
        // on a pu creer le product fait un truc
        res.status(201).json({
          message: 'Post saved successfully!'
        });
      }
    ).catch((var1) => {
      console.log(var1.errors)
      // on a pas pu créer le product fait un truc 
    }
    ); 
  });
    
};


createProduct = (param) => {
    product = new Product(param)  
    return product.save()
  }
  exports.createProduct = createProduct

exports.getOneProduct = (req, res, next) => {
console.log(req.params.id)
Product.findOne({
    _id: req.params.id
}).then(
    (product) => {
    res.status(200).json(product);
    }
).catch(
    (error) => {
    res.status(404).json({
        error: error
    });
    }
);
};

exports.modifyProduct = (req, res, next) => {
    const product = new Product({
      _id: req.params.id,
      label: req.body.label,
      principeActive: req.body.principeActive,
      laboratory: req.body.laboratory,
      name: req.body.name,
      cip: req.body.cip,
      barcode: req.body.barcode,
      message: req.body.message,
      dosage: req.body.dosage,
      receptionDate: req.body.receptionDate,
      buyingPrice: req.body.buyingPrice,
      cataloguePrice: req.body.cataloguePrice,
      netPrice: req.body.netPrice,
      quantity: req.body.quantity
    });
    Product.updateOne({_id: req.params.id}, product).then(
      () => {
        res.status(201).json({
          message: 'Product updated successfully!'
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


  exports.deleteProduct = (req, res, next) => {
    Product.deleteOne({_id: req.params.id}).then(
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


  exports.getAllProducts = (req, res, next) => {
    console.log("get all Products request")
    Product.find().then(
      (products) => {
        res.status(200).json(products);
      }
    ).catch((res,error) => {
      res.status(400).json({
        error: error
      });
    }
    );
  };