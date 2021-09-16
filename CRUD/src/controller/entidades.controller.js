const { model } = require("mongoose");

const indexEntidad = {};

const Entidades = require('../models/entidad.model');

indexEntidad.addEntidad = (req, res) => {

    //const ultimo = await TipoDocumento.find({},{idtipo_documento:1,_id:0}).limit(1).sort({$natural:-1})

    //db.tipodocumentos.find({},{idtipo_documento:1,_id:0}).limit(1).sort({$natural:-1})
    //const data = JSON.stringify(ultimo)
    //const x = ultimo['idtipo_documento']
    //console.log(ultimo[idtipo_documento])    

    res.render('entidades/add');
};
indexEntidad.createEntidad = async(req, res) => {
       
    const {identidad,idtipo_documento_identidad,codigo_tipo_documento_sunat,tipo_documento_descripcion,numero_documento,razon_social,correo_electronico,direccion,telefono} = req.body;
    const newEntidad = new Entidades({identidad,idtipo_documento_identidad,codigo_tipo_documento_sunat,tipo_documento_descripcion,numero_documento,razon_social,correo_electronico,direccion,telefono})
    await newEntidad.save();
    
    
    res.redirect('/entidades')
};

indexEntidad.listaEntidad = async (req, res) => {
    //res.send('lokita')
    const entidades = await Entidades.find({}).lean();
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
    res.render('entidades/lista_entidades',{entidades});
    //console.log(data);
    //console.log(JSON.stringify(documentos));
    //console.log(tipodocumentos);

}
indexEntidad.editEntidad = async(req, res) => {
    const entidades = await Entidades.findById(req.params.id).lean();
    res.render('entidades/edit_entidades',{entidades})
}

indexEntidad.updateEntidad = async (req, res) => {
    const {idtipo_documento_identidad,codigo_tipo_documento_sunat,tipo_documento_descripcion,numero_documento,razon_social,correo_electronico,direccion,telefono} = req.body;
    //console.log(req.body);
    await Entidades.findByIdAndUpdate(req.params.id,{idtipo_documento_identidad,codigo_tipo_documento_sunat,tipo_documento_descripcion,numero_documento,razon_social,correo_electronico,direccion,telefono});
    res.redirect('/entidades');
}

indexEntidad.deleteEntidad = async (req, res) => {
    
    await Entidades.findByIdAndDelete(req.params.id);
    res.redirect('/entidades');
}

module.exports = indexEntidad;