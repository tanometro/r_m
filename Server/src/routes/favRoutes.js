//const router = require("express").Router;
const express = require("express");
const router = express.Router;
const {postFav} = require("../controllers/handleFavorites");

router.post("/", (req, res) => {
    let newFav = req.body;
    res.status(200).send(postFav(newFav));
})

module.exports = newFav;