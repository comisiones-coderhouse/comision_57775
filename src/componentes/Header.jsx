import NavBar from "./NavBar"

function Header() {
  return (
    <header>
      <h1>Titulo</h1>
      {/* <NavBar
        miAtributoInventado="Hola"
        edad={34}
        nombre="Horacio"
        isHeader={true}
      /> */}

      <NavBar isHeader={true} />
    </header>
  )
}

export default Header