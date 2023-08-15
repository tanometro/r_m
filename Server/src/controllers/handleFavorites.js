const db = require("../Utils/favs");

const postFav = (newFav)=>{
    db.push(newFav);
    return db
}

const deleteFav = (req, res) =>{
    const id = parseInt(req.params.id);

    const personajes = myFavorites.filter(char => char.id !== id);

    res.status(200).json(myFavorites);
}

modules.export = {postFav, deleteFav};
