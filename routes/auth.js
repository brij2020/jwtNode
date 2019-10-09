const router  = require('express').Router();
const {register,userList}=  require('../db/Controller/UserController');
router.get('/test',(req,res) =>  {
    res.json({"test":true})
})

router.post('/register',register);
router.get('/users',userList)
module.exports = router;