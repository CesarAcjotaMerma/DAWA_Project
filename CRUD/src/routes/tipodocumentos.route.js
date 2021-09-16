const { Router } = require('express');
const router = Router();

const { 
    addTipoDocumentos, 
    createTipoDocument, 
    listaTipoDocumentos, 
    editTipoDocumento, 
    updateTipoDocumento, 
    deleteTipoDocumento 
} = require('../controller/tipodocumentos.controller')

router.get('/tipodocumentos/add', addTipoDocumentos);
router.post('/tipodocumentos/create', createTipoDocument);
router.get('/tipodocumentos', listaTipoDocumentos);
router.get('/tipodocumentos/edit/:id', editTipoDocumento);
router.put('/tipodocumentos/edit/:id', updateTipoDocumento);
router.delete('/tipodocumentos/delete/:id', deleteTipoDocumento);
module.exports = router;