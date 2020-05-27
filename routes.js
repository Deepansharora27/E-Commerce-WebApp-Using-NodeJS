//Writing the Required Import Statements that we need in Our App ==> 
const fs = require('fs'); 

const requestHandler = (req,res) =>{
    const url = req.url ; 
    const method = req.method ; 
    if(url === '/'){
        res.write('<html>')
        res.write('<head><title>My Web Page </title></head>'); 
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form></body>'); 
        res.write('</html>');
        return res.end(); //Ending the Response Object. 
    }
    
    if(url === '/message' && method === 'POST'){
         //Parsing the Request Body Here in this If Code Block : 
         //There is nothing such as request.data that is available to us in Node , so we need to think of a Different Strategy
         const body  = [];  
        req.on('data' , (chunk) => {
            //The Data Event will be fired whenever a New Chunk is ready to be read.
            //CallBack Function that Should be Executed For Every Data Event.
            console.log(chunk); 
            body.push(chunk); 
        })
        //All the Chunks are Being Stored in the Body Array ==> Refer the console.log(chunk) Statement.
        req.on('end' , () => {
            //To now work with all of the Chunks which we have received , we now need to buffer them 
            const parsedBody = Buffer.concat(body).toString();  
            console.log(paçrsedBody)
        })
    }
    
    res.setHeader('Content-Type' , 'text/html'); 
    res.write('<html>')
        res.write('<head><title>My Web Page </title></head>'); 
        res.write('<body><h1>Hello From the NodeJS Server</h1></body>'); 
        res.write('</html>');
    
    //This is the Response that we are sending back to Our Client's Browser.
    res.end(); 
    
};

module.exports = requestHandler ; 

