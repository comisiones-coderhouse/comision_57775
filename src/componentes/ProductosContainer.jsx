import { useEffect, useState } from "react";
import Productos from "./Productos"

function ProductosContainer() {

  const [productos, setProductos] = useState([])
  const [pagina, setPagina] = useState(1)
  const [mostrar, setMostrar] = useState(true)

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

  const mostrarProductos = () => {
    setMostrar(!mostrar)
  }

  if (mostrar) {
    return (
      <div>
        <button onClick={mostrarProductos}>mostrar productos</button>
        <Productos productos={productos} />
      </div>
    )
  } else {
    return (
      <div>
        <button onClick={mostrarProductos}>mostrar productos</button>
      </div>
    )
  }
}
export default ProductosContainer