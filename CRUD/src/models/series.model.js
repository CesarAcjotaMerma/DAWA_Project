const mongoose = require('mongoose');

const SeriesSchema = mongoose.Schema({
    
    idserie: Number,
    identidad:Number,
    idtipo_documento:Number,
    descripcion:String,
    correlativo:Number,
    log_usuariocreacion : String,
    log_fechacreacion : String,
    log_usuariomodif : String,
    log_fechamodif: String,
    log_estado : Number
});

module.exports = mongoose.model('Series', SeriesSchema);