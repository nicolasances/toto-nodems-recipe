var mongo = require('mongodb');
var config = require('../../config');
var converter = require('../../conv/StepConverter');

var MongoClient = mongo.MongoClient;

exports.getStep = function(id) {

  return new Promise(function(success, failure) {

    return MongoClient.connect(config.mongoUrl, function(err, db) {

      db.db(config.dbName).collection(config.collections.steps).deleteOne({_id: new mongo.ObjectId(id)}, function(err, res) {

        db.close();

        success();

      });
    });
  });

}
