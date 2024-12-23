import React from 'react';
import { Navbar } from './components/Navbar';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Uzbek from './pages/Uzbek';
import Jahon from './pages/Jahon';
import Sport from './pages/Sport';
import NewsDetail from './components/News/One.News';
import Category from './components/News/Category';
import Login from './Login/Login';
import Sign from './Login/Sign';
import CreateMaqola from './components/News/CreatNews';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
 
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/uzb" element={<Uzbek />} />
          <Route path="/jhn" element={<Jahon />} />
          <Route path="/sprt" element={<Sport />} />
          <Route path="/OneNews/:id" element={<NewsDetail/>} />
          <Route path='/All/:ctg' element={<Category/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/sigin' element={<Sign/>}/>
          <Route path='/newCr' element={<CreateMaqola/>}/>
        </Routes>
      </main>


      <Footer />
    </div>
  );
};

export default App;