var http = require("http");
const PORT = 3001;
const characters = require("./Utils/data")

http.createServer((req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    const {url} = req;

    if(url.includes("/rickandmorty/character/")){
       
        let id = url.split("/").pop();

        let foundCharacter = characters.find(character => character.id === parseInt(id))
       
        if(foundCharacter){
            res.writeHead(200, {"Content-type": "text/plain"});
            res.end(JSON.stringify(foundCharacter));
        }
        else {
            res.writeHead(404, {"Content-type": "text/plain"});
            res.end("No se encontró el personaje con ese ID");
            }
    };
}).listen(PORT, "localhost")