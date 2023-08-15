const router = require("express").Router();
const getCharById = require("./controllers/getCharById");
const handleFavorites = require("./controllers/handleFavorites");
const login = require("./controllers/login");

router.get("/characters/:id", (req, res)=>{
    const {id} = req.params;
    getCharById(id);

    let foundCharacter = getCharById(id);
       
    if(foundCharacter){
        res.status(200).json(foundCharacter)
    }
    else {
        res.status(404).json({"error": "No se encontró el personaje con ese ID"});
            }
})

router.get("/login", ()=>{});
router.post("/fav", ()=>{});
router.delete("/fav/:id", ()=>{});

module.exports = router;