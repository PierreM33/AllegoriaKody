import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Book from './pages/Book';
import Contact from './pages/Contact';
import Home from './pages/Home';
import News from './pages/News';

const App = () => {
  return (

// Menu
<BrowserRouter>
<Routes>
  <Route path="/" element ={<Home /> }></Route>
  <Route path="/book" element ={<Book /> }></Route>
  <Route path="/news" element ={<News /> }></Route>
  <Route path="/contact" element ={<Contact /> }></Route>
  <Route path="*" element ={<Home /> }></Route>
</Routes>
</BrowserRouter>

  );
};

export default App;