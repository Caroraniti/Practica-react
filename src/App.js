import "./App.css"

//JSX
// ES UNA MEZCLA DE JS Y HTML. ME PERMITE USAR FUNCIONES QUE RETORNAN HTML
//PERO CON TODAS LAS FUNCIONALIDADES DE JS (VARIABLES, CONDICIONALES, ETC)

const App = () => {

  const nombre = "Caro"
  return (
    <div className="contenedor">
      <h1>Hola {nombre}</h1>
      <p>Frontend</p>
    </div>
  )
}



export default App;