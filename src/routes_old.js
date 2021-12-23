import React from "react"
import Main from './pages/Main'
import SobreNos from './pages/SobreNos'
import Contato from './pages/Contato/index'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

export default function Rotas()
{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" exact component={<Main></Main>} />
                <Route path="/contato" component={<Contato/>} />
                <Route path="/sobreNos" component={<SobreNos></SobreNos>} />
            </Routes>
        </BrowserRouter>
    );
};