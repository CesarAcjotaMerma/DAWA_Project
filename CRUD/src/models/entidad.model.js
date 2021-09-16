const mongoose = require('mongoose');

const EntidadSchema = mongoose.Schema({
    identidad: Number,
    idtipo_documento_identidad:Number,
    /*idtipo_documento_identidad:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'TipoDocumento'
    },*/
    codigo_tipo_documento_sunat:Number,
    tipo_documento_descripcion:String,
    numero_documento:Number,
    razon_social:String,
    correo_electronico:String,
    direccion:String,
    telefono:String,
    log_usuariocreacion : String,
    log_fechacreacion : String,
    log_usuariomodif : String,
    log_fechamodif: String,
    log_estado : Number
});

module.exports = mongoose.model('entidades', EntidadSchema);