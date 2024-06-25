import Header from "./componentes/Header.jsx"
import Footer from "./componentes/Footer.jsx";
import Main from "./componentes/Main.jsx"
import { BrowserRouter } from "react-router-dom";
import CartProvider from "./componentes/CartProvider.jsx";

function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <Header />
        <Main />
        <Footer />
      </CartProvider>
    </BrowserRouter>
  )
}

export default App;