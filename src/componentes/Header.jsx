import NavBar from "./NavBar"

function Header() {
  return (
    <header>
      <h1>Titulo</h1>
      <NavBar isHeader={true} />
    </header>
  )
}

export default Header