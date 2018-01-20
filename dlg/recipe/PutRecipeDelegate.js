var mongo = require('mongodb');
var config = require('../../config');
var converter = require('../../conv/RecipeConverter');

var MongoClient = mongo.MongoClient;

exports.putRecipe = function(id, update) {

  return new Promise(function(success, failure) {

    return MongoClient.connect(config.mongoUrl, function(err, db) {

      db.db(config.dbName).collection(config.collections.recipes).updateOne({_id: new mongo.ObjectId(id)}, converter.updateRecipe(update), function(err, res) {

        db.close();

        success();

      });
    });
  });

}
