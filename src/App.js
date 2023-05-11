import './App.scss';
import Navbar from './components/Navbar';
import {Routes, Route, useLocation} from 'react-router-dom';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Contact from './containers/Contacts';
import Portfolio from './containers/Portfolio';
import Home from './containers/Home';
import About from './containers/About';
import Skills from './containers/Skills';
import Resume from './containers/Resume';
import particles from './utils.js/particles';


function App() {
  const location = useLocation()
  console.log(location)
  const handleInit = async (main) => {
    await loadFull(main);
  };

  const renderParticleJsInHomePage = location.pathname === "/";


  return (
    <div className="App">
      {renderParticleJsInHomePage && (
        <Particles id="particles" options={particles} init={handleInit} />
      )}
    <Navbar/>
    <div className='App__main-page-content'>
    <Routes>
        <Route index path='/' element={<Home/>}></Route>
        <Route index path='/about' element={<About/>}></Route>
        <Route index path='/resume' element={<Resume/>}></Route>
        <Route index path='/skills' element={<Skills/>}></Route>
        <Route index path='/portfolio' element={<Portfolio/>}></Route>
        <Route index path='/contact' element={<Contact/>}></Route>


      </Routes>

    </div>
      
    
    </div>
  );
}

export default App;
