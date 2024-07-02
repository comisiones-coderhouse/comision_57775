import { useEffect, useState } from "react";
import Productos from "./Productos"
import { useParams } from "react-router-dom";
import PageTitle from "./PageTitle";
import { app } from "../firebaseConfig";
import { getFirestore, collection, getDoc, getDocs, updateDoc, addDoc, deleteDoc } from "firebase/firestore";

const db = getFirestore(app);
const collectionDeProductos = collection(db, "productos")
const consulta = addDoc(collectionDeProductos, {
  "id": 3,
  "title": "Annibale Colombo Bed",
  "description": "The Annibale Colombo Bed is a luxurious and elegant bed frame, crafted with high-quality materials for a comfortable and stylish bedroom.",
  "category": "furniture",
  "price": 1899.99,
  "stock": 47,
  "image": "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/1.png",
}).then((res) => {
  console.log(res)
  console.log("Salio todo bien")
})
  .catch((err) => {
    console.log(err)
    console.log("Hubo un error")
  })






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

  return (
    <>
      <PageTitle title="Productos" />
      <Productos productos={productos} />
    </>
  )
}

export default ProductosContainer