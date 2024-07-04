import { faker } from "@faker-js/faker";
import { app } from "./firebaseConfig";
import { getFirestore, collection, getDoc, getDocs, updateDoc, addDoc, deleteDoc, query, where, doc } from "firebase/firestore";

const db = getFirestore(app);
const collectionDeProductos = collection(db, "productos")


export function generateProducts(cant) {

  if (typeof cant !== "number") return;

  for (let i = 0; i < cant; i++) {
    const producto = {
      id: faker.string.uuid(),
      title: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      category: faker.commerce.department(),
      price: faker.commerce.price(),
      stock: faker.number.int({ min: 0, max: 100 }),
      image: faker.image.url(),
    }

    addDoc(collectionDeProductos, producto)
      .then((res) => {
        console.log(res)
        console.log("Salio todo bien")
      })
      .catch((err) => {
        console.log(err)
        console.log("Hubo un error")
      })

  }

}

export function getProducts() {

  return getDocs(collectionDeProductos)
    .then((res) => {
      const productos = res.docs.map((doc) => {
        const producto = doc.data() //{ id, title, description, category, price, stock, image }
        producto._id = doc.id //{...,_id }
        return producto
      })
      return productos
    })
    .catch(() => {
      console.log("Hubo un error")
    })
}

export async function getProductsAsync() {

  const res = await getDocs(collectionDeProductos)

  const productos = res.docs.map((doc) => {
    const producto = doc.data()
    producto._id = doc.id
    return producto
  })

  return productos

}

export function getProductsByCategory(category = "Sports") {

  const filtro = query(collectionDeProductos, where("category", "==", category))
  //const consulta = getDocs(filtro)
  //consulta.then((res) => {
  return getDocs(filtro)
    .then((res) => {
      const productos = res.docs.map((doc) => {
        const producto = doc.data()
        producto._id = doc.id
        return producto
      })
      return productos
    })
    .catch(() => {
      console.log("Hubo un error")
    })
}

export async function getProductsByCategoryAsync(category = "Sports") {

  const filtro = query(collectionDeProductos, where("category", "==", category))

  const res = await getDocs(filtro)

  const productos = res.docs.map((doc) => {
    const producto = doc.data()
    producto._id = doc.id
    return producto
  })

  return productos

}

export function getProductsById() {
  const id = "JSeN0hs1Bn0fUCsBv3xh"
  const filtro = doc(collectionDeProductos, id)
  const consulta = getDoc(filtro)

  consulta
    .then((res) => {
      const producto = res.data()
      producto._id = res.id
      return producto
    })
    .catch((err) => { })
}

export async function getProductsByIdAsync(id) {

  try {
    //const id = "JSeN0hs1Bn0fUCsBv3xh"
    const filtro = doc(collectionDeProductos, id)
    const res = await getDoc(filtro)

    const producto = res.data()
    producto._id = res.id
    return producto
  } catch (err) {
    console.log(err)
    return null
  }
}




//getProductsByIdAsync()

function createNewOrder() { }

