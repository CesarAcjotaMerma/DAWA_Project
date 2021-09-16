const { Router } = require('express');
const router = Router();

const { 
    addSerie, 
    createSerie, 
    listaSerie, 
    editSerie, 
    updateSerie, 
    deleteSerie 
} = require('../controller/series.controller')

router.get('/series/add', addSerie);
router.post('/series/create', createSerie);
router.get('/series', listaSerie);
router.get('/series/edit/:id', editSerie);
router.put('/series/edit/:id', updateSerie);
router.delete('/series/delete/:id', deleteSerie);
module.exports = router;