var express = require('express');
var Promise = require('promise');
var bodyParser = require("body-parser");
var logger = require('toto-apimon-events')

var getRecipesDlg = require('./dlg/recipe/GetRecipesDelegate');
var getRecipeDlg = require('./dlg/recipe/GetRecipeDelegate');
var postRecipeDlg = require('./dlg/recipe/PostRecipeDelegate');
var putRecipeDlg = require('./dlg/recipe/PutRecipeDelegate');

var getIngredientsDlg = require('./dlg/ingredient/GetIngredientsDelegate');
var postIngredientDlg = require('./dlg/ingredient/PostIngredientDelegate');
var deleteIngredientDlg = require('./dlg/ingredient/DeleteIngredientDelegate');
var putIngredientDlg = require('./dlg/ingredient/PutIngredientDelegate');

var getStepsDlg = require('./dlg/step/GetStepsDelegate');
var postStepDlg = require('./dlg/step/PostStepDelegate');
var deleteStepDlg = require('./dlg/step/DeleteStepDelegate');
var putStepDlg = require('./dlg/step/PutStepDelegate');

var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, GoogleIdToken");
  res.header("Access-Control-Allow-Methods", "OPTIONS, GET, PUT, POST, DELETE");
  next();
});
app.use(bodyParser.json());

app.get('/', function(req, res) {res.send({status: 'running'});});
app.get('/recipes', function(req, res) {logger.apiCalled('recipe', '/recipes', 'GET', req.query, req.params, req.body); getRecipesDlg.getRecipes().then(function(result) {res.send(result);});});
app.post('/recipes', function(req, res) {logger.apiCalled('recipe', '/recipes', 'POST', req.query, req.params, req.body); postRecipeDlg.postRecipe(req.body).then(function(result) {res.send(result);});});
app.get('/recipes/:id', function(req, res) {logger.apiCalled('recipe', '/recipes/{id}', 'GET', req.query, req.params, req.body); getRecipeDlg.getRecipe(req.params.id).then(function(result) {res.send(result);});});
app.put('/recipes/:id', function(req, res) {logger.apiCalled('recipe', '/recipes/{id}', 'PUT', req.query, req.params, req.body); putRecipeDlg.putRecipe(req.params.id, req.body).then(function(result) {res.send(result);});});

app.get('/recipes/:id/ingredients', function(req, res) {logger.apiCalled('recipe', '/recipes/{id}/ingredients', 'GET', req.query, req.params, req.body); getIngredientsDlg.getIngredients(req.params.id).then(function(result) {res.send(result);});});
app.post('/recipes/:id/ingredients', function(req, res) {logger.apiCalled('recipe', '/recipes/{id}/ingredients', 'POST', req.query, req.params, req.body); postIngredientDlg.postIngredient(req.params.id, req.body).then(function(result) {res.send(result);});});
app.delete('/recipes/:id/ingredients/:iid', function(req, res) {logger.apiCalled('recipe', '/recipes/{id}/ingredients/{iid}', 'DELETE', req.query, req.params, req.body); deleteIngredientDlg.deleteIngredient(req.params.iid).then(function(result) {res.send(result);});});
app.put('/recipes/:id/ingredients/:iid', function(req, res) {logger.apiCalled('recipe', '/recipes/{id}/ingredients/{iid}', 'PUT', req.query, req.params, req.body); putIngredientDlg.putIngredient(req.params.iid, req.body).then(function(result) {res.send(result);});});

app.get('/recipes/:id/steps', function(req, res) {logger.apiCalled('recipe', '/recipes/{id}/steps', 'GET', req.query, req.params, req.body); getStepsDlg.getSteps(req.params.id).then(function(result) {res.send(result);});});
app.post('/recipes/:id/steps', function(req, res) {logger.apiCalled('recipe', '/recipes/{id}/steps', 'POST', req.query, req.params, req.body); postStepDlg.postStep(req.params.id, req.body).then(function(result) {res.send(result);});});
app.delete('/recipes/:id/steps/:iid', function(req, res) {logger.apiCalled('recipe', '/recipes/{id}/steps/{iid}', 'DELETE', req.query, req.params, req.body); deleteStepDlg.deleteStep(req.params.iid).then(function(result) {res.send(result);});});
app.put('/recipes/:id/steps/:iid', function(req, res) {logger.apiCalled('recipe', '/recipes/{id}/steps/{iid}', 'PUT', req.query, req.params, req.body); putStepDlg.putStep(req.params.iid, req.body).then(function(result) {res.send(result);});});

app.listen(8080, function() {
  console.log('Recipe Microservice up and running');
});
