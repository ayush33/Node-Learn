const http = require('http');
const fs = require('fs')

//event driven architec if req come execute 
const server = http.createServer(function(req, res){

    const url = req.url
    let method = req.method
    if(url==='/'){
        res.write('<html>')
        res.write('<head><title>Hi</title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit" name="post">post</button></form>')
        res.write('</html>')
        res.end()
    }
    console.log("as",url,method)
    if(url==="/message" && method==='POST'){
        let body = []
       req.on('data', (chunk)=>{
        console.log("chunk", chunk)
        body.push(chunk)
       })
       req.on('end', ()=>{
        const parsed = Buffer.concat(body).toString();
        console.log(parsed)
        fs.writeFileSync('message.txt', parsed)
       })
    }
});

server.listen(3000)