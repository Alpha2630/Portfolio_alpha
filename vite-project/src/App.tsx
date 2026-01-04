import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projet from './components/Projet'
import Experience from './components/Experience'
function App() {


  return (
    <div className='p-5 md:px-[15%]'>
      <Navbar/>
      <Home/>
      <About/>
      <Experience/>
      <Projet/>
    </div>

  )
}

export default App
