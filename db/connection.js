const mongoose = require('mongoose');
require('dotenv').config()

function connect() {
    const connect = async (cb) =>{ 
    await mongoose.connect(`${process.env.DB_URL}/${process.env.DB_NAME}`, {useUnifiedTopology: true,
    useNewUrlParser: true, })
    .then(con => {
        console.log("db connected !!")
	    cb();	    
	})
    .catch(error => console.log("excetion happen in db connection",error)) 
}
    return connect;
	
} 
module.exports = connect
