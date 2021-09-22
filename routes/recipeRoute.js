const express = require('express')
const router = express.Router();
const recipeController = require('../controllers/recipeController')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: "./uploads",
    filename: (req, file, callback) => {
        callback(null, file.originalname);
    }
})
const upload = multer({ storage: storage })

router.get('/', recipeController.recipeDetails);

router.post('/add', upload.single('RecipeImg'), recipeController.addRecipe);

module.exports = router;