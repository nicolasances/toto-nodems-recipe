var mongo = require('mongodb');
var config = require('../config');
var converter = require('../conv/StepConverter');

var MongoClient = mongo.MongoClient;

exports.postStep = function(recipeId, step) {

  return new Promise(function(success, failure) {

    return MongoClient.connect(config.mongoUrl, function(err, db) {

      db.db(config.dbName).collection(config.collections.steps).insertOne(converter.persistentStep(recipeId, step), function(err, res) {

        db.close();

        success({id: res.insertedId});

      });
    });
  });

}
