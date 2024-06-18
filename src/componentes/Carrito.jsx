import { useState } from "react"
import Input from "./Input"

const Carrito = () => {

  const [data, setData] = useState(0)
  const [error, setError] = useState(false) 

  const handleSubmit = (e) => {
    e.preventDefault()
  } 

  const handleStateUplifting = (long) => {
    setData(long)
    if(long > 10) {
      setError(true)
    } else {
      setError(false)
    }
  }

  return (
    <div>
      <h2>Carrito</h2>
      <p>El input hijo tiene {data} caracteres</p>
      { error ?  <p className="text-sm font-bold text-red-500"> Te pasaste </p>  : null }
      <form onSubmit={handleSubmit}>
        <Input
          onStateUplifting={handleStateUplifting}
        />
        <button>Enviar</button>
      </form>
    </div>
  )
}
export default Carrito