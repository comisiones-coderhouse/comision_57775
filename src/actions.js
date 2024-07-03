import { faker } from "@faker-js/faker";
import { app } from "./firebaseConfig";
import { getFirestore, collection, getDoc, getDocs, updateDoc, addDoc, deleteDoc } from "firebase/firestore";

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
  //const consulta = fetch(....)
  //consulta.then((res)=>{ return res.json() })
  //consulta.then((res)=>{ console.log(res) })

  /* const consulta =  */
  return getDocs(collectionDeProductos)
    .then((res) => {
      //res == es la respuesta de la consulta
      //res.docs == es un array de objetos con referencias a los documentos, no los documentos mismos
      //res.docs[N] == es un objeto con referencia a un documento
      //res.docs[N].data() == Data es una funcion/metodo que devuelve el contenido del documento

      //const productos = []

      const productos = res.docs.map((doc) => {
        /* console.log(doc.id)
        console.log(doc.data()) */

        const producto = doc.data() //{ id, title, description, category, price, stock, image }
        //producto.id = doc.id
        producto._id = doc.id
        //productos.push(producto)
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

function getProductsByCategory() { }

function getProductsById() { }

function createNewOrder() { }