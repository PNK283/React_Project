import './App.css';
import Navbar from './components/Navbar'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Admissions from './components/Admissions'
import Facilities from './components/Facilities'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
// import Enquiry from './components/Enquiry'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Navbar/>
           <Routes>
             <Route path='/home' element={<Home/>}/>
             <Route path='/about' element={<About/>}/>
             <Route path='/admissions' element={<Admissions/>}/>
             <Route path='/facilities' element={<Facilities/>}/>
             <Route path='/gallery' element={<Gallery/>}/>
             <Route path='/contact' element={<Contact/>}/>
             <Route path='/admissions' element={<Admissions/>}/>
           </Routes>
      </BrowserRouter>
       
    </div>
  );
}

export default App;
