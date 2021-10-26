// Estructura de coleccion de admins
const mongoose = require('mongoose');
const { Schema } = mongoose;

const AdminsSchema = new Schema(
    {
        id: { type: Number, require: true},
        nombre: { type: String, require: true},
        email: { type: String, require: true},
        foto: { type: String, require: false},
        password: { type: String, require: true},
        rol: { type: String, require: true}
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('admins', AdminsSchema);