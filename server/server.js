
/**
|--------------------------------------------------
| Server set-up 
|--------------------------------------------------
*/
const express                   = require('express');
const app                       = express();
const bodyParser                =  require('body-parser')
const authRouter                = require('../routes/auth')
const connection 		        = require('../db/connection.js')



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
app.use('/api/user',authRouter);


/**
 *  Server Listen  
 *
 */
const server = ()=>app.listen(8080,()=>console.log("server is up and listen on port 8080"));
connection()(server);