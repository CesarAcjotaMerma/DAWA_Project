const mongoose = require('mongoose');

const DetallesSchema = mongoose.Schema({
    
    iddetalledocumento: Number,
    iddocumentocontable:Number,
    descripcion_item:String,
    precio_unitario_venta:Number,
    precio_unitario:Number,
    codigo_unidad:String,
    descripcion_unidad:String,
    cantidad:Number,
    subtotal : Number,
    monto_igv : String,
    valorigv : String,
    codigo_item : Number,
    log_usuariocreacion:String,
    log_fechacreacion:String,
    log_usuariomodif:String,
    log_fechamodif:String,
    log_estado:Number
});

module.exports = mongoose.model('Detalles', DetallesSchema);