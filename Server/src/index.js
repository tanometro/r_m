// var http = require("http");
// const PORT = 3001; 
// const getCharById = require("./controllers/getCharById")

// http.createServer((req, res)=>{
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     const {url} = req;

//     if(url.includes("/rickandmorty/character/")){
       
//         let id = url.split("/").pop();

//         let foundCharacter = getCharById(id);
       
//         if(foundCharacter){
//             res.writeHead(200, {"Content-type": "text/plain"});
//             res.end(JSON.stringify(foundCharacter));
//         }
//         else {
//             res.writeHead(404, {"Content-type": "text/plain"});
//             res.end("No se encontró el personaje con ese ID");
//             }
//     };
// }).listen(PORT, "localhost")

const express = require("express");
const server = express();
const PORT = 3001;
const routes = require("./routes");
const { conn } = require('./DB_connection');

server.use(express.json());

server.use("/rickandmorty", routes)

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });

conn.sync({force: true}).then(()=> {
   server.listen(PORT, () => {
      console.log('Server raised in port: ' + PORT);
   });
})
