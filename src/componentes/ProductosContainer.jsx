import { useEffect, useState } from "react";
import Productos from "./Productos"
import { useParams } from "react-router-dom";

function ProductosContainer() {

  const [productos, setProductos] = useState([])
  const [mostrar, setMostrar] = useState(true)
  const params = useParams()

  useEffect(() => {

    if (params.id) {
      fetch('https://dummyjson.com/products/category/' + params.id)
        .then((res) => {
          return res.json()
        })
        .then((data) => {
          setProductos(data.products)
        })
    } else {
      fetch('https://dummyjson.com/products')
        .then((res) => {
          return res.json()
        })
        .then((data) => {
          setProductos(data.products)
        })
    }

  }, [params.id])

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