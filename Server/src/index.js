var http = require("http");
const PORT = 3001;
const characters = require('./data.js');

http.createServer((req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');

    if(url.includes("/rickandmorty/character/")){
        let id = url.split("/").pop();
        let foundCharacter = characters.find(character => character.id === parseInt(id))
        if(foundCharacter){
            return res.json({
            success: true,
            character: foundCharacter,
           });
        }
        else {
            return res.json({
                success: false,
                msj: 'No se encontró ningún personaje con ese id',
                             })
            }
    };
})
.listen(PORT, "localhost")