const { Router } = require('express');
const router = Router();

const { renderDocumentos, createDocument, listaDocumentos, editDocumento, updateDocumento, deleteDocumento } = require('../controller/documentos.controller')

router.get('/documentos/add', renderDocumentos);
router.post('/documentos/add', createDocument);
router.get('/documentos', listaDocumentos);
router.get('/documentos/edit/:id', editDocumento);
router.post('/documentos/edit/:id', updateDocumento);
router.delete('/documentos/delete/:id', deleteDocumento);
module.exports = router;