import { ShoppingCart } from "lucide-react"
import { Link, NavLink } from "react-router-dom"

function NavBar(props) {
  if (props.isHeader == true) {
    return (
      <nav className="flex items-center gap-4">
        <NavLink to="/">home</NavLink>
        <NavLink to="/productos">productos</NavLink>
        <NavLink to="/categoria/furniture">muebles</NavLink>
        <NavLink to="/categoria/laptops">laptops</NavLink> 
        <NavLink to="/carrito" className="flex items-center gap-2">
          carrito
          <ShoppingCart/>
        </NavLink>  
      </nav>
    )
  } else {
    return (
      <nav className="flex justify-center gap-4 text-xs">
        <Link to="/tyc">T.Y.C.</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/contacto">contacto</Link>
      </nav>
    )
  }
}

export default NavBar