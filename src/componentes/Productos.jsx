function Productos({ productos }) {

  //console.log(productos)[{id:1,title:"prod 1"}] -> <div>
  /* productos.map(()=>{
    console.log("producto")
  }) */

  //vista
  return (
    <section className="grid grid-cols-1 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {productos.map((producto,indice) => {
        /* console.log(producto) */
        return (
          <article key={indice} className="p-4 text-black bg-white rounded-md shadow-xl">
            <h2>{producto.title}</h2>
            <p>${producto.price}</p>
            <img src={producto.images[0]} alt={producto.title}/>
          </article>
        )
      })}
    </section>
  )
}
export default Productos