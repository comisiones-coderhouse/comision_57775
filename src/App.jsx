import Header from "./componentes/Header.jsx"
import Footer from "./componentes/Footer.jsx";
import Main from "./componentes/Main.jsx"
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main />
      <Footer />
    </BrowserRouter>
  )
}

export default App;