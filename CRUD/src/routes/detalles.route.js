const { Router } = require('express');
const router = Router();

const { 
    addDetalle, 
    createDetalle, 
    listaDetalle, 
    editDetalle, 
    updateDetalle, 
    deleteDetalle 
} = require('../controller/detalles.controller')

router.get('/detalles/add', addDetalle);
router.post('/detalles/create', createDetalle);
router.get('/detalles', listaDetalle);
router.get('/detalles/edit/:id', editDetalle);
router.put('/detalles/edit/:id', updateDetalle);
router.delete('/detalles/delete/:id', deleteDetalle);
module.exports = router;