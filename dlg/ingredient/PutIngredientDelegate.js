var mongo = require('mongodb');
var config = require('../../config');
var converter = require('../../conv/IngredientConverter');

var MongoClient = mongo.MongoClient;

exports.putIngredient = function(req) {

  var id = req.params.iid;
  var update = req.body;

  return new Promise(function(success, failure) {

    return MongoClient.connect(config.mongoUrl, function(err, db) {

      db.db(config.dbName).collection(config.collections.ingredients).updateOne({_id: new mongo.ObjectId(id)}, converter.updateIngredient(update), function(err, res) {

        db.close();

        success();

      });
    });
  });

}
