const axios = require("axios");

const getCharById = (res, id) => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response)=>{
        const characterData =    {
        id: id,
        name: response.data.name,
        gender: response.data.gender,
        origin: response.data.origin,
        image: response.data.image,
        status: response.data.status,
        }
        res.writeHead(200, {"Content-type": "application/json"});
        res.end(JSON.stringify(characterData))
    })
    .catch((error)=>{
        res.writeHead(500, {"Content-type": "text/plain"});
        res.end(error.message)
    })
    
}

module.exports= getCharById;