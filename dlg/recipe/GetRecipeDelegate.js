var mongo = require('mongodb');
var config = require('../../config');
var converter = require('../../conv/RecipeConverter');

var MongoClient = mongo.MongoClient;

exports.do = function(id) {

  var id = req.params.id;

  return new Promise(function(success, failure) {

    return MongoClient.connect(config.mongoUrl, function(err, db) {

      db.db(config.dbName).collection(config.collections.recipes).find({_id: new mongo.ObjectId(id)}).toArray(function(err, array) {

        db.close();

        success(converter.recipe(array[0]));

      });
    });
  });

}
