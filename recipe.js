var express = require('express');
var Promise = require('promise');
var bodyParser = require("body-parser");

var getRecipesDlg = require('./dlg/GetRecipesDelegate');
var getRecipeDlg = require('./dlg/GetRecipeDelegate');
var postRecipeDlg = require('./dlg/PostRecipeDelegate');
var putRecipeDlg = require('./dlg/PutRecipeDelegate');

var getIngredientsDlg = require('./dlg/GetIngredientsDelegate');
var postIngredientDlg = require('./dlg/PostIngredientDelegate');
var deleteIngredientDlg = require('./dlg/DeleteIngredientDelegate');
var putIngredientDlg = require('./dlg/PutIngredientDelegate');

var getStepsDlg = require('./dlg/GetStepsDelegate');
var postStepDlg = require('./dlg/PostStepDelegate');
var deleteStepDlg = require('./dlg/DeleteStepDelegate');
var putStepDlg = require('./dlg/PutStepDelegate');

var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, GoogleIdToken");
  res.header("Access-Control-Allow-Methods", "OPTIONS, GET, PUT, POST, DELETE");
  next();
});
app.use(bodyParser.json());

app.get('/', function(req, res) {res.send({status: 'running'});});
app.get('/recipes', function(req, res) {getRecipesDlg.getRecipes().then(function(result) {res.send(result);});});
app.post('/recipe', function(req, res) {postRecipeDlg.postTax(req.body).then(function(result) {res.send(result);});});
app.get('/recipes/:id', function(req, res) {getRecipeDlg.getRecipe(req.params.id).then(function(result) {res.send(result);});});
app.put('/recipe/:id', function(req, res) {putRecipeDlg.putRecipe(req.params.id, req.body).then(function(result) {res.send(result);});});

app.get('/recipes/:id/ingredients', function(req, res) {getIngredientsDlg.getIngredients(req.params.id).then(function(result) {res.send(result);});});
app.post('/recipe/:id/ingredients', function(req, res) {postIngredientDlg.postIngredient(req.params.id, req.body).then(function(result) {res.send(result);});});
app.delete('/recipes/:id/ingredients/:iid', function(req, res) {deleteIngredientDlg.deleteIngredient(req.params.iid).then(function(result) {res.send(result);});});
app.put('/recipe/:id/ingredients/:iid', function(req, res) {putIngredientDlg.putIngredient(req.params.iid, req.body).then(function(result) {res.send(result);});});

app.get('/recipes/:id/steps', function(req, res) {getStepsDlg.getSteps(req.params.id).then(function(result) {res.send(result);});});
app.post('/recipe/:id/steps', function(req, res) {postStepDlg.postStep(req.params.id, req.body).then(function(result) {res.send(result);});});
app.delete('/recipes/:id/steps/:iid', function(req, res) {deleteStepDlg.deleteStep(req.params.iid).then(function(result) {res.send(result);});});
app.put('/recipe/:id/steps/:iid', function(req, res) {putStepDlg.putStep(req.params.iid, req.body).then(function(result) {res.send(result);});});

app.listen(8080, function() {
  console.log('Recipe Microservice up and running');
});
