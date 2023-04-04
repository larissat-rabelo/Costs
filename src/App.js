import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './Components/Pages/Home.js'
import Contato from './Components/Pages/Contato.js'
import Empresa from './Components/Pages/Empresa.js'
import Novo_Projeto from './Components/Pages/Novo_Projeto.js'
import Container from './Components/Layout/Container.js'
import Navbar from './Components/Layout/Navbar.js'
import Footer from './Components/Layout/Footer.js'
import Projects from './Components/Pages/Projects.js'

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home />} > 
          </Route>

          <Route path='/contato' element={<Contato/>}>
          </Route>

          <Route path='/projects' element={<Projects/>} >
          </Route>

          <Route path='/empresa' element={<Empresa/>}>
          </Route>

          <Route path='/NovoProjeto' element={<Novo_Projeto/>}> 
          </Route>
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
