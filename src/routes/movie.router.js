const express = require("express");
const router = express.Router();
const {
    idInParams,
    createMovieValidator,
    updateMovieValidator,
} = require("../validators/movie.validator");

const { runValidation } = require("../middlewares/validator.middleware");

const {
    createMovie,
    getMovies,
    getOneMovie,
    updateMovie,
    toggleMovieFavorite,
} = require("../controllers/movie.controller");

router.post("/", createMovieValidator, runValidation, createMovie);
router.get("/", getMovies);
router.get("/:id", idInParams, runValidation, getOneMovie);
router.put("/:id", idInParams, updateMovieValidator, runValidation, updateMovie);
router.patch("/favorite/:id", idInParams, runValidation, toggleMovieFavorite);

module.exports = router;
