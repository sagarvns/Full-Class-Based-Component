import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Dashboard from './components/dashboard/Dashboard';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Pagenotfound from './components/pagenotfound/Pagenotfound';
import Contactlist from './components/contact/contactlist/Contactlist';


function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="about-us" element={<About/>}/>
            <Route path="contact-us" element={<Contact/>}/>
            <Route path="contact-list" element={<Contactlist/>}/>

            <Route path="*" element={<Pagenotfound/>}/>
          </Routes>
        <Footer/>
        
      </BrowserRouter>
    </>
  );
}

export default App;
