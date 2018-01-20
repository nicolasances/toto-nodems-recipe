var mongo = require('mongodb');
var config = require('../config');
var converter = require('../conv/StepConverter');

var MongoClient = mongo.MongoClient;

exports.getSteps = function(recipeId) {

  return new Promise(function(success, failure) {

    return MongoClient.connect(config.mongoUrl, function(err, db) {

      db.db(config.dbName).collection(config.collections.steps).find(converter.findStepsForRecipe(recipeId)).toArray(function(err, array) {

        db.close();

        var steps = [];

        for (var i = 0; i < array.length; i++) {

          steps.push(converter.step(array[i]));
        }

        success({steps : steps});

      });
    });
  });

}
