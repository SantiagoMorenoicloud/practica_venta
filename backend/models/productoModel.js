import{ db} from'../config/db.js';

export const getProductos = (Callback ) => {
    db.query('select * from productos',Callback);
};
export const addProducto=(producto, callback) => {
    db.query('insert into productos set ?', producto, callback);
};