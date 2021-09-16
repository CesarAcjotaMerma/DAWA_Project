const mongoose = require('mongoose');

const TipoDocumentoSchema = mongoose.Schema({
    
    idtipo_documento: Number,
    codigo:String,
    descripcion:String,
    abreviacion:String,
    log_usuariocreacion:String,
    log_fechacreacion:String,
    log_usuariomodif:String,
    log_estado:Number
});

module.exports = mongoose.model('TipoDocumento', TipoDocumentoSchema);