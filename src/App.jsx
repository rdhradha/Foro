import './App.css'
import Busqueda from './Components/Busqueda'
import Categorias from './Components/Categorias'
import FormularioPublicacion from './Components/FormularioPublicacion'
import Hilos from './Components/Hilos'
import Navbar from './Components/Navbar'
import Perfil from './Components/Perfil'

function App() {
    return (
    <>
      <div>
            <Navbar />
            <div id="categorias">
                <Categorias />
            </div>
            <div id="hilos">
                <Hilos />
            </div>
            <div id="formulario-publicacion">
                <FormularioPublicacion />
            </div>
            <div id="perfil">
                <Perfil />
            </div>
            <div id="busqueda">
                <Busqueda />
            </div>
        </div>
    </>
  )
}

export default App