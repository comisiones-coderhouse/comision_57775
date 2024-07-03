import { useEffect, useState } from "react";
import Productos from "./Productos"
import { useParams } from "react-router-dom";
import PageTitle from "./PageTitle";
import { getProducts, getProductsAsync } from "../actions";


/* getProducts().then((res)=>{ console.log(res) })
getProductsAsync().then((res)=>{ console.log(res) }) */

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
      /* fetch('https://dummyjson.com/products')
        .then((res) => {
          return res.json()
        })
        .then((data) => {
          setProductos(data.products)
        }) */
      getProductsAsync().then((res) => { setProductos(res) })
    }

  }, [params.id])

  const mostrarProductos = () => {
    setMostrar(!mostrar)
  }

  return (
    <>
      <PageTitle title="Productos" />
      <Productos productos={productos} />
    </>
  )
}

export default ProductosContainer