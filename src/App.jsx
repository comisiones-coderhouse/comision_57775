import Header from "./Header.jsx"
/* 
App es un componente

Componentes : 

- Son funciones
- Van en mayusculas (por el compilador)
- si o si tienen que tener retorno
- Solo pueden retornar UN solo elemento

Tipos de Componentes : 

- Estructurales : Son los que representan una plantilla general o un bloque generico del sitio/aplicacion


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
      <Header/>
      <main>
        <h2>Home</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere natus esse numquam nihil dignissimos eligendi, vel saepe pariatur aut voluptatum, ut excepturi eius doloremque exercitationem dolores cumque? Odit, saepe tempore?</p>
      </main>
      <footer>
        <p>Copyright &copy; - Horacio Gutierrez</p>
      </footer>
    </>
  )
}

//App()
//<App/>

export default App;