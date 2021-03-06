var mongo = require('mongodb');
var config = require('../../config');
var converter = require('../../conv/StepConverter');

var MongoClient = mongo.MongoClient;

exports.do = function(req) {

  var id = req.params.iid;
  var update = req.body;

  return new Promise(function(success, failure) {

    return MongoClient.connect(config.mongoUrl, function(err, db) {

      db.db(config.dbName).collection(config.collections.steps).updateOne({_id: new mongo.ObjectId(id)}, converter.updateStep(update), function(err, res) {

        db.close();

        success();

      });
    });
  });

}
