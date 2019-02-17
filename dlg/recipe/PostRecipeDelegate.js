var mongo = require('mongodb');
var config = require('../../config');
var converter = require('../../conv/RecipeConverter');

var MongoClient = mongo.MongoClient;

exports.postRecipe = function(req) {

  var recipe = req.body;

  return new Promise(function(success, failure) {

    return MongoClient.connect(config.mongoUrl, function(err, db) {

      db.db(config.dbName).collection(config.collections.recipes).insertOne(converter.persistentRecipe(recipe), function(err, res) {

        db.close();

        success({id: res.insertedId});

      });
    });
  });

}
