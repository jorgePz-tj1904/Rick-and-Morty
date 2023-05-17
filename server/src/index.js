const data = require('./utils/data');
const http = require('http');

http
.createServer((req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    if(req.url.includes('/rickandmorty/character')){
        let id = req.url.split('/').at(-1)
        let pj = null;
        data.forEach(chrt => {
            if(chrt.id == id){
                pj = chrt
            } 
        });
        res.end(JSON.stringify(pj));
    }

}).listen(3001, 'localhost');