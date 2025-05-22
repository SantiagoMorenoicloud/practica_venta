import cors from 'cors';
import express from 'express';
import clienteRoutes from './routes/clienteRoutes.js';
import productoRoutes from './routes/productoRoutes.js';
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('../frontend'));

app.use('/api/clientes', clienteRoutes);
app.use('/api/productos', productoRoutes);
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`servidor corriendo en http://localhost:${PORT}`);
})





// api significa application programming interfaz, contiene un conjuntos de reglas que accedan a datos de otra aplicaciones. poder utilizar los datos de mysql
// puedo utilizarla, crear para conectar a google max, conectarse a un mapa, accedera datos de otra aplicacion
// res es la configuracion que le permite a la api acceder.
// api res full permite que la aplicacion interactue con la base de datos, editar, crear datos (get, pus, dilet)
//fetch y action utilizamos el fecth
// api res full individualizador rutas, metodos y llamados para que sea mas escalable y mas eficiente.
