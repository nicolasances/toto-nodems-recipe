var mongo = require('mongodb');
var config = require('../../config');
var converter = require('../../conv/RecipeConverter');

var MongoClient = mongo.MongoClient;

exports.do = function() {

  return new Promise(function(success, failure) {

    return MongoClient.connect(config.mongoUrl, function(err, db) {

      db.db(config.dbName).collection(config.collections.recipes).find().toArray(function(err, array) {

        db.close();

        var recipes = [];

        for (var i = 0; i < array.length; i++) {

          recipes.push(converter.recipe(array[i]));
        }

        success({recipes : recipes});

      });
    });
  });

}
