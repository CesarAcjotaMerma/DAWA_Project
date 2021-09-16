const { model } = require("mongoose");

const indexSeries = {};

const Series = require('../models/series.model');

indexSeries.addSerie = (req, res) => {

    //const ultimo = await TipoDocumento.find({},{idtipo_documento:1,_id:0}).limit(1).sort({$natural:-1})

    //db.tipodocumentos.find({},{idtipo_documento:1,_id:0}).limit(1).sort({$natural:-1})
    //const data = JSON.stringify(ultimo)
    //const x = ultimo['idtipo_documento']
    //console.log(ultimo[idtipo_documento])    

    res.render('series/add');
};
indexSeries.createSerie = async(req, res) => {
    console.log(req.body)
    
    const {idserie,identidad,idtipo_documento,descripcion,correlativo} = req.body;
    const newSerie = new Series({idserie,identidad,idtipo_documento,descripcion,correlativo})
    await newSerie.save();
    
    
    res.redirect('/series')
};

indexSeries.listaSerie = async (req, res) => {
    //res.send('lokita')
    const series = await Series.find({}).lean();
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
    res.render('series/lista_series',{series});
    //console.log(JSON.stringify(documentos));
    //console.log(tipodocumentos);

}
indexSeries.editSerie = async(req, res) => {
    const series = await Series.findById(req.params.id).lean();
    res.render('series/edit_serie',{series})
}

indexSeries.updateSerie = async (req, res) => {
    const {identidad,idtipo_documento,descripcion,correlativo} = req.body;
    await Series.findByIdAndUpdate(req.params.id,{identidad,idtipo_documento,descripcion,correlativo});
    res.redirect('/series');
}

indexSeries.deleteSerie = async (req, res) => {
    
    await TipoDocumento.findByIdAndDelete(req.params.id);
    res.redirect('/series');
}

module.exports = indexSeries;