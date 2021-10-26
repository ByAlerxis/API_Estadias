const mongoose = require('mongoose');
const { Schema } = mongoose;

const HistorialSchema = new Schema(
    {
        tipo: {type: String, require: true},
        resultado: {type: Number, require: true}
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('historialCambio', HistorialSchema);