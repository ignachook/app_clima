const mongoose = require('mongoose');
const dbconnect = () => {
    mongoose.set('strictQuery', true)
    mongoose.connect("mongodb://127.0.0.1:27017/api_clima", {}, (err,res) => {
        if (!err) {
            console.log("Conexion correcta")
        }
        else {
            console.log("Error de conexion");
        }
    })
}

module.exports = dbconnect;