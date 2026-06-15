import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Page2 from './Pages/Page2';
import Submit from './Pages/Submit';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/page2" element={<Page2 />} />
      <Route path="/Submit" element={<Submit />} />
    </Routes>

   
  );
}