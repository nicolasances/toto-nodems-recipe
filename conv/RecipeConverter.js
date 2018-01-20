
/**
 * Converts a persistent recipe into the TO
 */
exports.recipe = function(po) {

  return {id: po._id, name: po.name, thumbnail: po.thumbnail};

}

/**
 * Creates a persistent PO Recipe from the provided TO
 */
exports.persistentRecipe = function(rec) {

  return {
    name: rec.name,
    thumbnail: 'thumb/recipe-default-thumbnail.jpg'
  }
}

/**
 * Updates a recipe with the provided info
 */
exports.updateRecipe = function(update) {

  if (update.name != null) return {$set : {name : update.name}};

  if (update.thumbnail != null) return {$set : {thumbnail : update.thumbnail}};

}
