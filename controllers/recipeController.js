const Recipe = require('../model/recipeSchema')
const http = require('../constants/constants')
const Hotel = require('../model/hotelSchema')

const recipeDetails = async (req, res) => {
    try {
        const recipesdata = await Recipe.find()
        res.json(recipesdata)
    } catch (error) {
        res.status(http.INTERNAL_SERVER_ERROR)
        res.send('Internal Server Error')
    }
}

const addRecipe = async (req, res) => {
    try {
        const { recipeName, Cost } = req.body
        const { recipeImg } = req.file;
        const newRecipe = new Recipe(
            { recipeName, Cost, recipeImg }
        )
        await newRecipe.save()
        res.send('Data saved')
    } catch (error) {
        res.status(http.INTERNAL_SERVER_ERROR)
        res.send('Internal server error')
    }
}

module.exports = {
    recipeDetails, addRecipe
}
