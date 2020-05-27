//Importing the http module Of NodeJS Globally : 
const http = require('http'); 

const server = http.createServer((req,res) =>{
    const url = req.url ; 
    const method = req.method ; 

    if(url === '/'){
        res.write('<html>')
        res.write('<head><title>Response WebPage</title></head>')
        res.write('<body>')
        res.write('<form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Submit</button> </form>')
        res.write('</body>')
        res.write('</html>')
        res.end();
    }

    if(url === '/create-user' && method === 'POST'){
        const body = [] ; 
        req.on('data' , (chunk) => {
            body.push(chunk); 
        })

        req.on('end' , () => {
            const parsedBody = Buffer.concat(body).toString(); 
            console.log(parsedBody); 
        })
    }

    if(url === '/users'){
        res.write('<html>')
        res.write('<head><title>List Of Users Present on the Page</title></head>')
        res.write('<body>')
        res.write('<ul>')
        res.write('<li>Deepanshu Arora</li>')
        res.write('<li>Mark Zuckerberg</li>')
        res.write('<li>Bill Gates</li>')
        res.write('<li>Tom Bilyeu</li>')
        res.write('</ul>')
        res.write('</body>')
        res.write('</html>')
        res.end();
    }
})

//Listening Requests on the Port 4000.
server.listen(4000); 