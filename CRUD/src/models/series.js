const mongoose = require('mongoose');

const SeriesSchema = mongoose.Schema({
    idserie: Number,
    identidad: Number,
    idtipo_documento: Number,
    descripcion: String,
    abreviacion: String,
    correlativo: Number,
    log_usuariocreacion: String,
    log_fechacreacion: String,
    log_usuariomodificacion: String,
    log_fechamodificacion: String,
    tipo_serie: Number,
    orden: Number,
    log_estado: String
});


module.exports = mongoose.model('series', SeriesSchema);