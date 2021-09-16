const { model } = require("mongoose");

const indexDocumentos = {};

const Documento = require('../models/documentos.model');

indexDocumentos.renderDocumentos = (req, res) => {
    res.send('jajajaj')
};
indexDocumentos.createDocument = (req, res) => {
    res.send('lokita')
}

indexDocumentos.listaDocumentos = async (req, res) => {
    //res.send('lokita')
    const documentos = await Documento.find({}).lean();
    const page = parseInt(req.query.page);
    /*
    const documentos = await Documento.aggregate(
        [
            {
                $lookup:
                {
                    from:"tipo_documento",
                    localField:"idtipo_documento",
                    foreignField:"_id",
                    as: "documento_tipodocumento"
                }
            },
            { $unwind: "$documento_tipodocumento"}
        ]
    )
    res.render('documentos/lista_documentos',{documentos});
    */
    res.render('documentos/lista_documentos',{documentos});
    //console.log(JSON.stringify(documentos));
    //console.log(documentos);

}
indexDocumentos.editDocumento = (req, res) => {
    res.send('editando doucmento')
}

indexDocumentos.updateDocumento = (req, res) => {
    res.send('update doucmento')
}

indexDocumentos.deleteDocumento = async (req, res) => {
    
    await Documento.findByIdAndDelete(req.params.id);
    console.log(req.params)
    
    res.send('elimando documento')
}

module.exports = indexDocumentos;