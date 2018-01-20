var mongo = require('mongodb');
var config = require('../config');
var converter = require('../conv/IngredientConverter');

var MongoClient = mongo.MongoClient;

exports.putIngredient = function(id, update) {

  return new Promise(function(success, failure) {

    return MongoClient.connect(config.mongoUrl, function(err, db) {

      db.db(config.dbName).collection(config.collections.ingredients).updateOne({_id: new mongo.ObjectId(id)}, converter.updateIngredient(update), function(err, res) {

        db.close();

        success();

      });
    });
  });

}
