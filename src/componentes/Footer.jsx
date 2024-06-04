import NavBar from "./NavBar"

function Footer() {
  return (
    <footer className="p-4 text-center">
      <p className="text-xs">Copyright &copy; - Horacio Gutierrez</p>
      <NavBar isHeader={false} />
    </footer>
  )
}

export default Footer