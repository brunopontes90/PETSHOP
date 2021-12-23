import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Main from './pages/Main';
import Contato from './pages/Contato';
import SobreNos from './pages/SobreNos';

export default function Routas()
{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" exact component={Main} />
                <Route path="/contato" component={Contato} />
                <Route path="/sobreNos" component={SobreNos} />
            </Routes>
        </BrowserRouter>
    );
};