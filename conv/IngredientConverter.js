
/**
 * Finds the ingredients of the specified recipe
 */
exports.findIngredientsForRecipe = function(recipeId) {

  return {recipeId : recipeId};
}

/**
 * Converts a persistent ingredient into a TO
 */
exports.ingredient = function(po) {

  return {
    id: po._id,
    amount: po.amount,
    name: po.name
  }
}

/**
 * Updates an ingredient with the specified data
 */
exports.updateIngredient = function(data) {

  if (data.name != null) return {$set : {name : data.name}};

  if (data.amount != null) return {$set : {amount : data.amount}};

}

/**
 * Persists the provided TO
 */
exports.persistentIngredient = function(recipeId, to) {

  return {
    recipeId : recipeId,
    name : to.name,
    amount : to.amount
  }
}
