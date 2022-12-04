import React from 'react';
import Header from './components/Header';
import '../src/sass/_base.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CatSection } from './components/CatSection';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">

      
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route>
            <Route path='/' element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      <Footer/>
    </BrowserRouter>
       

    </div>
  );
}

export default App;
