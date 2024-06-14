import { Route, Routes } from "react-router-dom";
import ProductosContainer from "./ProductosContainer";
import Carrito from "./Carrito";

//Routes : Es un contenedor de Route
//Route : Es un componente que se encarga de renderizar el contenido correspondiente a un path especificado de manera condicional y dinamica
function Main() {
  return (
    <main className="p-4 bg-[rgba(255,255,255,0.3)] grow">
      <Routes>
        <Route path="/" element={<p>Home</p>} />
        <Route path="/categoria/:id" element={<ProductosContainer />} />
        <Route path="/productos" element={<ProductosContainer />} />
        <Route path="/carrito" element={<Carrito />} />
      </Routes>
    </main>
  )
}

export default Main;