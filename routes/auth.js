const router  = require('express').Router();
const {register,userList,userLogin}=  require('../db/Controller/UserController');
const verify = require('../db/helper/verifyUser')
router.get('/test',(req,res) =>  {
    res.json({"test":true})
})

router.post('/register',register);
router.get('/users',verify,userList)
router.post('/login',userLogin)

module.exports = router;