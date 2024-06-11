import { useState } from "react"
import { useDesktop } from "../utils"

function Button({ children }) {
  //estados
  const [estado, setEstado] = useState(false)
  const isDesktop = useDesktop()

  //acciones
  const hacerClick = () => {
    setEstado(!estado)
  }

  //vista
  if (estado === false) {
    return (
      <div>
        <button onClick={hacerClick} className="btn">{children}</button>
      </div>
    )
  }


  if (isDesktop) {
    return (
      <div>
        <button onClick={hacerClick} className="btn">{children}</button>
        <div className="p-4 text-black bg-white rounded-sm">
          soy un popup
        </div>
      </div>
    )
  }

  return (
    <div>
      <button onClick={hacerClick} className="btn">{children}</button>
      <div className="fixed p-4 text-black bg-white border-2 border-black rounded-sm bottom-10 right-10">
        soy un popup
      </div>
    </div>
  )

}

export default Button