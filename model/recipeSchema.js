const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
    recipeName: {
        type: String
    },
    Cost: {
        type: Number
    },
    recipeImg: {
        type: String
    }
})

module.exports = mongoose.model('Recipe', recipeSchema)