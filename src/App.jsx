import Header from "./componentes/Header.jsx"
import Footer from "./componentes/Footer.jsx";
import Main from "./componentes/Main.jsx"
/* 
App es un componente

Componentes : 

- Son funciones
- Van en mayusculas (por el compilador)
- si o si tienen que tener retorno
- Solo pueden retornar UN solo elemento

Tipos de Componentes : 

- Estructurales : Son los que representan una plantilla general o un bloque generico del sitio/aplicacion

- Reutilizables : Son los que representan un bloque que se puede reutilizar en diferentes partes del sitio/aplicacion obteniendo el mismo resultado o uno diferente

*/

function App() {
  //const titulo = document.createElement("h1")
  //titulo.textContent = "Hola Mundo desde un p"
  //titulo.id = "titulo"
  //titulo.className = "titulo"
  //return <h1 id="titulo" className="titulo">Hola Mundo desde un p</h1>
  //Header()
  //<Header/>
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

//App()
//<App/>

export default App;