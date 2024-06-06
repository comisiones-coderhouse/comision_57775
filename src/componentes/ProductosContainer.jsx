import { useEffect, useState } from "react";
import Productos from "./Productos"
/* import data from "../productos.json" */

//setTimeout(function,number)
/* 
setTimeout(()=>{
  console.log(data)
},3000)

fetch("/productos.json")
*/

function ProductosContainer() {

  //estados
  const [productos, setProductos] = useState([])
  const [pagina, setPagina] = useState(1)

  //acciones
  useEffect(() => {

   /*  console.log("Pedido a una api...")
    console.log("URL : https://dummyjson.com/products")
    console.log("Pagina : " + pagina)
    console.log("-----------------------------------------------------------") */

    fetch('https://dummyjson.com/products')
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        /* console.log(data.products) */
        setProductos(data.products)
      })


  }, [pagina])


  //acciones
  const cambiarPaginaUno = () => {
    setPagina(1)
  }

  const cambiarPaginaDos = () => {
    setPagina(2)
  }

  const cambiarPaginaTres = () => {
    setPagina(3)
  }


  //vista
  return (
    <div>
      <button onClick={cambiarPaginaUno}>Pagina 1</button>
      <button onClick={cambiarPaginaDos}>Pagina 2</button>
      <button onClick={cambiarPaginaTres}>Pagina 3</button>
      <Productos productos={productos} />
    </div>
  )
}
export default ProductosContainer


/* 

Paso a paso de la ejecucion

1) Se ejecuta el componente ProductosContainer por primera vez
2) se crea el estado productos por primera y unica vez
3) se ejecuta el fetch
4) se renderiza en pantalla "...esperando"
5) se termina el fetch entonces entra al .then
6) se cambia el estado productos
7) todo de nuevo menos el paso 2
*/