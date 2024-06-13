import { Link, Route, Routes } from "react-router-dom"
import NavBar from "./NavBar"

function Header() {
  return (
    <header className="flex justify-between p-4">
      <h1 className="text-2xl font-bold">Titulo</h1>
      <Routes>
        <Route path="/productos" element={<input/>}/>
      </Routes>
      <NavBar isHeader={true} />
    </header>
  )
}

export default Header