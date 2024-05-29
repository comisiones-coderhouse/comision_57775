/* 

const btn = document.querySelector('.btn');
btn.addEventListener('click', hacerClick)

function hacerClick() {}

*/

function Button(props) {


  const hacerClick = () => {
    console.log("click")
  }

  return (
    <button className="bg-red-950 p-4 mx-2 rounded-md hover:bg-red-300 transition-all duration-300" onClick={hacerClick} >{props.texto}</button>
  )
}
export default Button