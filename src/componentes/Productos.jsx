import Button from "./Button"

function Productos({ productos }) {
  return (
    <section className="grid gap-8 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
      {productos.map((producto, indice) => {
        return (
          <article key={indice} className="p-4 text-black transition-all bg-white rounded-md shadow-xl hover:scale-105">
            <img src={producto.images[0]} alt={producto.title} className="object-contain aspect-square" />
            <h2 className="font-bold truncate">{producto.title}</h2>
            <p className="text-gray-400">${producto.price}</p>
            <Button type="link" href="/detalle">
              ver detalle
            </Button>
          </article>
        )
      })}
    </section>
  )
}
export default Productos