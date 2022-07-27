const express = require('express');
const firebase = require('firebase-admin');
const path = require('path')

const app = express();

const PORT = 1111;

firebase.initializeApp({
    credential: firebase.credential.cert(require('./fb/ptecho_key.json'))
})

const firstore = firebase.firestore();

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname+'/index.html'));
})
 

app.use(
    express.urlencoded({
      extended: true,
    })
);
  
app.use(express.json());
  

app.use('/checkout', require('./checkout'));

app.listen(PORT, (server)=>{
    //var host = server.address().address
    //var port = server.address().port
    //console.log("Example app listening at http://%s:%s", host, port)
})