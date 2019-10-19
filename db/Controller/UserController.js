const mongoose      = require('mongoose');
const User          =  require('../Model/UserModel');
const bycrypt       = require('bcrypt')
const jwt           = require('jsonwebtoken')
mongoose.set('useFindAndModify', false);


/***
 * POST request 
 * Register new user 
 * @parma {req,res}
 * @retuen {respose }
 */
const register = async (req,res) =>{
    const salt = await bycrypt.genSalt(10);
    const hashPassword = await bycrypt.hash(req.body.password,salt)
    let user = User({...req.body,password:hashPassword });
    await User.findOne({"email" : req.body.email})
    .then(async(result) => {
        if(result === null ) {
           await user.save()
            .then(doc=>res.json({
                "status" : true,
                ...doc._doc   
            }))
            .catch(error=>{
                if(error._message) {
                    res.json({"error":error._message})
                }
            })
        } else {
            res.json({
                statue : true,
                message :"user email already exist "
            })
        }
        
    })
    .catch(error => {console.log("error fin done "); res.json({status:500,"message":"Something error"})})
   

}


/**
 * GET Request
 * @param {*} req 
 * @param {*} res 
 * @return {*list of users }
 */

const userList  = async (req,res) => {
    await User.find({})
    .then(list=>res.json(list))
    .catch(error=>{console.log("user list error",error);res.json({status:500,"message":"Something going wrong "})})
} 

/***
 * POST Request
 * @param{ req,res} user login
 * @return {respponse} 
 */


const userLogin = async (req,res) => {
    console.log("request",req.body)
    await User.findOne({"email" :req.body.email})
    .then(async (data) =>{
        if(data===null) {
            res.json({status : true ,"message" : "Email or password is wrong"})
        } else {
            await bycrypt.compare(req.body.password,data.password)  
            .then(user=>{
                if(user) {
                    const token = jwt.sign({_id : data._id},process.env.SECRET_TOKEN)
                    res.header('auth-token').send(token) 
                    // res.json({status :  true,"messge":"user login in system","auth-token":token})
                } else {
                    res.json({status :  true,"messge":"Email or password is wrong"})
                    
                }})
            .catch(err => {console.log("user email error"); res.json({status:500,"message":"Something going wrong "})} )
        }

    })
    .catch(error =>{ console.log("user faild",error);res.json({status:500,"message":"Something going wrong "})})
}

 /**
  * POST Request
  * @param {*} req 
  * @param {*} res user  reset password 
  * @return {response}
  */
const resetPassword = async (req,res) => {
    await User.findOne({"email" :req.body.email})
    .then(async data => {
        if(data!== null ) {
            const id_ = mongoose.Types.ObjectId(data._id);
            const salt = await bycrypt.genSalt(10);
            const hashPassword = await bycrypt.hash(req.body.password,salt)
            await User.findOneAndUpdate({_id:id_}, { $set: { password: hashPassword }})
            .then(result =>{ console.log("result",result);res.json({"message":"password is changed!","status":true})})
            .catch(error => res.send(error) )
        } else {
            res.json({"message":"email not register "})
        }
    })
    .catch(error => { console.log("error",error); res.json({"message" : "Something wrong "})})
}
 
module.exports = { register,userList,userLogin,resetPassword}