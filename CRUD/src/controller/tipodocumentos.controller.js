const { model } = require("mongoose");

const indexTipoDocumentos = {};

const TipoDocumento = require('../models/tipodocumento.model');

indexTipoDocumentos.addTipoDocumentos = (req, res) => {

    //const ultimo = await TipoDocumento.find({},{idtipo_documento:1,_id:0}).limit(1).sort({$natural:-1})

    //db.tipodocumentos.find({},{idtipo_documento:1,_id:0}).limit(1).sort({$natural:-1})
    //const data = JSON.stringify(ultimo)
    //const x = ultimo['idtipo_documento']
    //console.log(ultimo[idtipo_documento])    

    res.render('tipodocumentos/add');
};
indexTipoDocumentos.createTipoDocument = async(req, res) => {
    const {idtipo_documento,codigo,descripcion,abreviacion} = req.body;
    const newTipoDocumento = new TipoDocumento({idtipo_documento,codigo,descripcion,abreviacion})
    await newTipoDocumento.save();
    //console.log(req.body)
    res.redirect('/tipodocumentos')
};

indexTipoDocumentos.listaTipoDocumentos = async (req, res) => {
    //res.send('lokita')
    const tipodocumentos = await TipoDocumento.find({}).lean();
    //const page = parseInt(req.query.page);
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
    res.render('tipodocumentos/lista_tipodocumentos',{tipodocumentos});
    //console.log(JSON.stringify(documentos));
    //console.log(tipodocumentos);

}
indexTipoDocumentos.editTipoDocumento = async(req, res) => {
    const tipo_documento = await TipoDocumento.findById(req.params.id).lean();
    res.render('tipodocumentos/edit_tipodoc',{tipo_documento})
}

indexTipoDocumentos.updateTipoDocumento = async (req, res) => {
    console.log(req.params.id)
    const {id,codigo,descripcion,abreviacion} = req.body;
    await TipoDocumento.findByIdAndUpdate(req.params.id,{id,codigo,descripcion,abreviacion});
    res.redirect('/tipodocumentos');
    //res.send('update tipodoucmento')
}

indexTipoDocumentos.deleteTipoDocumento = async (req, res) => {
    
    await TipoDocumento.findByIdAndDelete(req.params.id);
    res.redirect('/tipodocumentos');
}

module.exports = indexTipoDocumentos;