import { useEffect, useState } from "react"

function Button() {
  //estado
  const [estado, setEstado] = useState(false)

  //useEffect(function,array)
  /* 
  useEffect(() => {
    console.log("pedido a la api de ML, me traigo 1000 productos")
  },[]) 
  */


  //acciones
  const hacerClick = () => {
    setEstado(!estado)
  }

  //vista
  if (estado === false) {
    return (
      <div>
        <button onClick={hacerClick} className="btn">toggle</button>
      </div>
    )
  }

  return (
    <div>
      <button onClick={hacerClick} className="btn">toggle</button>
      <div className="p-4 text-black bg-white rounded-sm">
        soy un popup
      </div>
    </div>
  )
}

export default Button