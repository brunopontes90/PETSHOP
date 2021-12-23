import React from "react";
import { Link } from "react-router-dom";

export default function Menu(){
    return(
        <header>
            <ul>
                <li>
                    <Link to="/">Página Main</Link>
                </li>
                <li>
                    <Link to="/contato">Página de contatos</Link>
                </li>
                <li>
                <Link to="/sobre-nos">Página sobre nos</Link>
                </li>
            </ul>
        </header>
    )
};