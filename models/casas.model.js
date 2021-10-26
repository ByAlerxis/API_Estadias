const mongoose = require('mongoose');
const { Schema } = mongoose;

const CasasSchema = new Schema(
    {
        id: { type: Number, require: true},
        nombre_negocio: {type: String, require: true},
        direccion: {type: String, require: true},
        email: {type: String, require: true},
        password: { type: String, require: true},
        logo: {type: String, require: false},
        telefono: { type: Number, require: false},
        rol: { type: String, require: true},
        dllV: { type: Number, require: true},
        dllC: { type: Number, require: true},
        historial_dolar_main: [{ }],
        historial_dolar: [{ }],
        historial_put: [{ }],
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('casaCambio', CasasSchema);