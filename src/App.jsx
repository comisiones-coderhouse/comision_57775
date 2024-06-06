import Header from "./componentes/Header.jsx"
import Footer from "./componentes/Footer.jsx";
import Main from "./componentes/Main.jsx"


//Promises
//Mock Async == "Coder se refiere a simular el comportamiento de un proceso asíncrono, particularmente de un fetch"
/* 
const promesa = new Promise((res,rej)=>{
  res()
  //rej()
})

promesa.then(()=>{
  console.log("bien")
})

promesa.catch(()=>{
  console.log("mal")
})

const pedido = fetch("https://dummyjson.com/products")
console.log(pedido)
*/

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App;