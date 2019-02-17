var Controller = require('toto-api-controller');

var getRecipes = require('./dlg/recipe/GetRecipesDelegate');
var getRecipe = require('./dlg/recipe/GetRecipeDelegate');
var postRecipe = require('./dlg/recipe/PostRecipeDelegate');
var putRecipe = require('./dlg/recipe/PutRecipeDelegate');

var getIngredients = require('./dlg/ingredient/GetIngredientsDelegate');
var postIngredient = require('./dlg/ingredient/PostIngredientDelegate');
var deleteIngredient = require('./dlg/ingredient/DeleteIngredientDelegate');
var putIngredient = require('./dlg/ingredient/PutIngredientDelegate');

var getSteps = require('./dlg/step/GetStepsDelegate');
var postStep = require('./dlg/step/PostStepDelegate');
var deleteStep = require('./dlg/step/DeleteStepDelegate');
var putStep = require('./dlg/step/PutStepDelegate');

var apiName = 'recipe';

var api = new Controller(apiName, null, null);

api.path('GET', '/recipes', getRecipes);
api.path('POST', '/recipes', postRecipe);
api.path('GET', '/recipes/:id', getRecipe);
api.path('PUT', '/recipes/:id', putRecipe);

api.path('GET', '/recipes/:id/ingredients', getIngredients);
api.path('POST', '/recipes/:id/ingredients', postIngredient);
api.path('DELETE', '/recipes/:id/ingredients/:iid', deleteIngredient);
api.path('PUT', '/recipes/:id/ingredients/:iid', putIngredient);

api.path('GET', '/recipes/:id/steps', getSteps);
api.path('POST', '/recipes/:id/steps', postStep);
api.path('DELETE', '/recipes/:id/steps/:iid', deleteStep);
api.path('PUT', '/recipes/:id/steps/:iid', putStep);

api.listen();
