const mongoose = require('mongoose');

const DocumentoSchema = mongoose.Schema({
    iddocumentocontable: Number,
    idcentro_costos: Number,
    idtipo_documento: Number,
    idestado: Number,
    idestadosunat: Number,
    idmoneda: Number,
    idcondicion_pago: Number,
    id_serie: Number,
    idempresa: Number,
    tipo_operacion: String,
    numero_documento: String,
    id_origen: Number,
    direccion: String,
    codigo_pedido: String,
    serie_pedido: String,
    monto_subtotal: Number,
    monto_igv: Number,
    monto_total: Number,
    monto_total_desc: Number,
    valorigv: Number,
    total_precio_venta: Number,
});

module.exports = mongoose.model('documentos', DocumentoSchema);