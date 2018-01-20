
/**
 * Udpates the step of a recipe with the provided data
 */
exports.updateStep = function(data) {

  return {$set : {description : data.description}};

}

/**
 * Persists the provided step
 */
exports.persistentStep = function(recipeId, step) {

  return {
    recipeId : recipeId,
    description : step.description
  }
}

/**
 * Finds the steps of the given recipe
 */
exports.findStepsForRecipe = function(recipeId) {

  return {recipeId : recipeId};
}

/**
 * Creates a step TO from the persistent step
 */
exports.step = function(po) {

  return {
    id : po._id,
    description : po.description
  }
}
