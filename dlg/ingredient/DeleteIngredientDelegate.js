var mongo = require('mongodb');
var config = require('../../config');
var converter = require('../../conv/IngredientConverter');

var MongoClient = mongo.MongoClient;

exports.getIngredient = function(req) {

  var id = req.params.iid;

  return new Promise(function(success, failure) {

    return MongoClient.connect(config.mongoUrl, function(err, db) {

      db.db(config.dbName).collection(config.collections.ingredients).deleteOne({_id: new mongo.ObjectId(id)}, function(err, res) {

        db.close();

        success();

      });
    });
  });

}
