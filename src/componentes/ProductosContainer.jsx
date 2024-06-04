import { useState } from "react";
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

  //const [productos, setProductos] = useState([])
  /* const [cargando, setCargando] = useState(true) */
  const [estado, setEstado] = useState()

  fetch('https://dummyjson.com/products')
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      console.log(data.products)
      //setEstado(data.products)
      /* setCargando(false) */
    });

  return (
    <Productos />
  )
}
export default ProductosContainer