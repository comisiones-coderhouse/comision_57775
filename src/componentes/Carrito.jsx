import { useParams } from "react-router-dom"

function Carrito() {

  /* 
  const params = useParams()
  console.log(params) 
  */

  return (
    <div>
      <h2>Carrito</h2>
      <p>No tenes productos en tu carrito</p>
      <form>
        <div>
          <label>Nombre</label>
          <input type="text" name="nombre" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" />
        </div>
        <button>Enviar</button>
      </form>
    </div>
  )
}
export default Carrito