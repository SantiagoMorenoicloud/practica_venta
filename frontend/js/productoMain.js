const API_URL_PROD = 'http://localhost:3000/api/productos';

document.getElementById('formProducto').addEventListener('submit', async (e) => {
  e.preventDefault();

  const nombre_prod = document.getElementById('nombre_prod').value;
  const stock = document.getElementById('stock').value;
  const precio = document.getElementById('precio').value;

  try {
    const respuesta_prod= await fetch(API_URL_PROD, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nombre_prod, stock, precio })
    });

    const datos_prod = await respuesta_prod.json();

    if (respuesta_prod.ok) {
      alert(datos_prod.mensaje_prod); // Muestra "Producto agregado"
      document.getElementById('formProducto').reset();
      cargarProductos();
    } else {
      alert('Error al agregar Productos: ' + datos_prod.error);
    }
  } catch (error) {
    alert('Error al conectar con el servidor');
    console.error(error);
  }
});

async function cargarProductos() {
  try {
    const res_prod = await fetch(API_URL_PROD);
    const datos_prod = await res_prod.json();

    const tabla_prod = document.getElementById('tablaProductos');
    tabla_prod.innerHTML = '';
    datos_prod.forEach(Producto => {
      tabla_prod.innerHTML += `
        <tr>
          <td>${Producto.id}</td>
          <td>${Producto.nombre_prod}</td>
          <td>${Producto.stock}</td>
          <td>${Producto.precio}</td>
        </tr>
      `;
    });
  } catch (error) {
    console.error('Error al cargar los Productos:', error);
  }
}

cargarProductos();