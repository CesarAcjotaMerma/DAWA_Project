const mongoose = require('mongoose');

const DocumentoSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    iddocumentocontable : Number,
    idtipo_documento :{
        type:mongoose.Schema.Types.ObjectId,
        ref:'TipoDocumento'
    },
    idestado : Number,
    idestadosunat  : Number,
    idmoneda  : Number,
    idcondicion_pago  : Number,
    id_serie  : Number,
    idempresa  : {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Entidades'
    },
    tipo_operacion  : Number,
    numero_documento  : Number,
    direccion  :  String ,
    monto_subtotal  : Number,
    monto_igv  : Number,
    monto_total  : Number,
    monto_total_desc  :  String ,
    valorigv  :Number,
    log_usuariocreacion  :  String,
    log_fechacreacion  :  String,
    log_usuariomodif  :  String ,
    log_fechamodif  :  String ,
    log_estado  : Number,
    total_precio_venta  : Number
});

module.exports = mongoose.model('Documento', DocumentoSchema);