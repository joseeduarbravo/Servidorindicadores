import mongoose from 'mongoose';
const Schema= mongoose.Schema;

const indicadoresSchema= new Schema({
    nombre:{type: String, required:[true,'Nombre de indicador obligatorio']},
    tipo: String,
    cantidad:Number,
    date:{type: Date, default: Date.now},
    activo:{type: Boolean,default:true}
});
//Convertir modelo
const primerBd= mongoose.model('primerBd',indicadoresSchema);
export default primerBd;