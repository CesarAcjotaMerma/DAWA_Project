const { model } = require("mongoose");

const indexEntidad = {};

const Detalles = require('../models/detalles.model');

indexEntidad.addDetalle = (req, res) => {

    res.render('entidades/add');
};
indexEntidad.createDetalle = async(req, res) => {
    
    res.redirect('/entidades')
};

indexEntidad.listaDetalle = async (req, res) => {
    //res.send('lokita')
    const detalles = await Detalles.find({}).lean();
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
    res.render('detalles/lista_detalles',{detalles});
    //console.log(data);
    //console.log(JSON.stringify(documentos));
    //console.log(tipodocumentos);

}
indexEntidad.editDetalle = async(req, res) => {
    const detalles = await Detalles.findById(req.params.id).lean();
    res.render('detalles/edit_detalles',{detalles})
}

indexEntidad.updateDetalle = async (req, res) => {
    const {
        iddocumentocontable,
        descripcion_item,
        precio_unitario_venta,
        precio_unitario,
        codigo_unidad,
        descripcion_unidad,
        cantidad,
        subtotal
    } = req.body;
    console.log(req.body);
    await Detalles.findByIdAndUpdate(req.params.id,{
        iddocumentocontable,
        descripcion_item,
        precio_unitario_venta,
        precio_unitario,
        codigo_unidad,
        descripcion_unidad,
        cantidad,
        subtotal
    });
    res.redirect('/detalles');
}

indexEntidad.deleteDetalle = async (req, res) => {
    
    await Detalles.findByIdAndDelete(req.params.id);
    res.redirect('/detalles');
}

module.exports = indexEntidad;