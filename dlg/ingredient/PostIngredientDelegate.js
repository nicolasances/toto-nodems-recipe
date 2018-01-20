var mongo = require('mongodb');
var config = require('../../config');
var converter = require('../../conv/IngredientConverter');

var MongoClient = mongo.MongoClient;

exports.postIngredient = function(recipeId, ingredient) {

  return new Promise(function(success, failure) {

    return MongoClient.connect(config.mongoUrl, function(err, db) {

      db.db(config.dbName).collection(config.collections.ingredients).insertOne(converter.persistentIngredient(recipeId, ingredient), function(err, res) {

        db.close();

        success({id: res.insertedId});

      });
    });
  });

}
