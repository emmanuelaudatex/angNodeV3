// partRoutes.js

var express = require('express');
var partRoutes = express.Router();

// Require Item model in our routes module
var Part = require('../models/Part');

// Defined store route
partRoutes.route('/add').post(function (req, res) {
    var part = new Part(req.body);
   part.save()
    .then(item => {
    res.status(200).json({'part': 'part added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
partRoutes.route('/').get(function (req, res) {
    Part.find(function (err, parts) {
    if(err){
      console.log(err);
    }
    else {        
        res.json(parts);
        
    }
  });
});

// Defined edit route
partRoutes.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  Part.findById(id, function (err, part) {
      res.json(part);
  });
});

//  Defined update route
partRoutes.route('/update/:id').post(function (req, res) {
    Part.findById(req.params.id, function (err, part) {
    if (!part)
      return next(new Error('Could not load Document'));
    else {
      part.name = req.body.name;
      part.price = req.body.price;

      part.save().then(part => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
partRoutes.route('/delete/:id').get(function (req, res) {
    Part.findByIdAndRemove({ _id: req.params.id }, function (err, part) {
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = partRoutes;
