const mongoose      = require('mongoose');
const User          =  require('../Model/UserModel');
const register = async (req,res) =>{
    let user = User(req.body);
    await user.save()
    .then(doc=>res.json({
    "statue" : true,
    ...doc._doc   
    }))
    .catch(error=>{
        if(error._message) {
            res.json({"error":error._message})
        }
    })

}

const userList  = async (req,res) => {
    await User.find({})
    .then(list=>res.json(list))
    .catch(error=>{console.log("user list error",error)})
} 


module.exports = { register,userList}