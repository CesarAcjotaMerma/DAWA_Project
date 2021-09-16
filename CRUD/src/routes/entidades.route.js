const { Router } = require('express');
const router = Router();

const { 
    addEntidad,
    createEntidad,
    listaEntidad,
    editEntidad,
    updateEntidad,
    deleteEntidad

} = require('../controller/entidades.controller')

router.get('/entidades/add', addEntidad);
router.post('/entidades/create', createEntidad);
router.get('/entidades', listaEntidad);
router.get('/entidades/edit/:id', editEntidad);
router.put('/entidades/edit/:id', updateEntidad);
router.delete('/entidades/delete/:id', deleteEntidad);
module.exports = router;