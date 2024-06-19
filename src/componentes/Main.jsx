import { Route, Routes } from "react-router-dom";
import ProductosContainer from "./ProductosContainer";
import Carrito from "./Carrito";
import Home from "./Home";
import DetalleContainer from "./DetalleContainer";

function Main() {
  return (
    <main className="p-8 pb-20 bg-slate-200 grow text-black">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categoria/:id" element={<ProductosContainer />} />
        <Route path="/productos" element={<ProductosContainer />} />
        <Route path="/detalle" element={<DetalleContainer />} />
        <Route path="/carrito" element={<Carrito />} />
      </Routes>
    </main>
  )
}

export default Main;