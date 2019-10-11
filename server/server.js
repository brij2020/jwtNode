
/**
|--------------------------------------------------
| Server set-up 
|--------------------------------------------------
*/
const express                   = require('express');
const app                       = express();
const bodyParser                = require('body-parser')
const authRouter                = require('../routes/auth')
const connection 		        = require('../db/connection.js')
const path                      = require('path')


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 // parse application/json
app.use(bodyParser.json())

/****************  API Router ***********************/
app.use('/api/user',authRouter);
/************** End  *******************************/




/******************* Express Serve stattic files [ creating virtula path ]************************/
app.set('client',path.join(__dirname,'./../client'))
app.use('/dist',express.static(path.join(__dirname,'./../dist')))
app.use('/css',express.static(path.join(__dirname,'../client/public/css')))
app.use('/images',express.static(path.join(__dirname,'../client/public/images')))
app.use('/img',express.static(path.join(__dirname,'../client/public/img')))
app.use('/js',express.static(path.join(__dirname,'../client/public/js')))
app.get('*',(req,res)=>{
    res.sendFile('index.html',{root:path.join(__dirname,'../client/public/html/')})
})
/*****************  React End  *******************/







/**
 *  Server Listen  
 *
 */
const server = ()=>app.listen(8080,()=>console.log("server is up and listen on port 8080"));
connection()(server);