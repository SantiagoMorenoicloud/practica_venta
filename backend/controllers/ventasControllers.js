import{
    obterVentas as obterVentasModel,
    registrarVenta as registrarVentaModel
} from ' ../models/ventaModel.js';

export const registrarVenta= (req, res)=> {
    const venta = req.body;

    if(!venta.id_cliente ||!venta.id_producto||venta.cantidad){
        return res.status(400).json({error:'Falta campos requeridos'})
    }
    registrarVentaModel(venta, (err, resultado)=> {
        
    })
}