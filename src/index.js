import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import Contato from './pages/Contato/index';
import SobreNos from './pages/SobreNos/index';
import Mensagem from './pages/Layouts/mensagem';
import {BrowserRouter, Routes, Route} from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="contato" element={<Contato />} />
      <Route path="sobre-nos" element={<SobreNos />} />
      <Route path="mensagem" element={<Mensagem /> } />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);