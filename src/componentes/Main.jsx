/* import Button from "./Button"; */
import { Button } from "antd";
import muppet from "../muppet.jpg"


function Main() {
  return (
    <main>
      <h2>Home</h2>
      <img src="/imagen.jpg" alt="imagen" />
      <img src="https://picsum.photos/200" alt="imagen" />
      <img src={muppet} alt="muppet vivo" />
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere natus esse numquam nihil dignissimos eligendi, vel saepe pariatur aut voluptatum, ut excepturi eius doloremque exercitationem dolores cumque? Odit, saepe tempore?</p>
      {/* 
      <Button texto="ver mas"/>
      <Button texto="detalle"/>
       */}
      <Button>Click</Button>
    </main>
  )
}

export default Main;