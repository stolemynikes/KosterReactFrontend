import './App.css';

import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Bierkaart from './pages/bierkaart';

//Navbar & Footer
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">


      <Navbar/>
      
        <Routes>

          <Route path='/' exact element={<Home/>}></Route>

          <Route path='/bierkaart' exact element={<Bierkaart/>}></Route>

        </Routes>

        <Footer/>      
      
    </div>
  );
}

export default App;
