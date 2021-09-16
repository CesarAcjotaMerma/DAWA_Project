const { Router } = require('express');
const router = Router();

const {renderIndex} = require('../controller/index.controller')

router.get('/',renderIndex);

router.get('/about',(req,res)=>{
    res.render('index')
});

module.exports = router;