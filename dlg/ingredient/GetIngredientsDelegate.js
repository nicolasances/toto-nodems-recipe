var mongo = require('mongodb');
var config = require('../../config');
var converter = require('../../conv/IngredientConverter');

var MongoClient = mongo.MongoClient;

exports.getIngredients = function(recipeId) {

  return new Promise(function(success, failure) {

    return MongoClient.connect(config.mongoUrl, function(err, db) {

      db.db(config.dbName).collection(config.collections.ingredients).find(converter.findIngredientsForRecipe(recipeId)).toArray(function(err, array) {

        db.close();

        var ingredients = [];

        for (var i = 0; i < array.length; i++) {

          ingredients.push(converter.ingredient(array[i]));
        }

        success({ingredients : ingredients});

      });
    });
  });

}
