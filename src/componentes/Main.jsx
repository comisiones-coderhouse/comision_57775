import Button from "./Button";
import ProductosContainer from "./ProductosContainer";


function Main() {
  return (
    <main className="p-4 bg-[rgba(255,255,255,0.3)] grow">
      <h2>Home</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere natus esse numquam nihil dignissimos eligendi, vel saepe pariatur aut voluptatum, ut excepturi eius doloremque exercitationem dolores cumque? Odit, saepe tempore?</p>
      <Button texto="ver mas"/>

      <ProductosContainer/>
    </main>
  )
}

export default Main;