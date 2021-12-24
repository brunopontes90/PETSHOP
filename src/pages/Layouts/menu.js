import React from "react";
import "../../css/menu.css";
import { Link } from "react-router-dom";

export default function Menu(){
    return(
        <header>
            <ul>
                <li>
                    <Link to="/" class="link">Home</Link>
                </li>
                <li>
                    <Link to="/contato" class="link">Contatos</Link>
                </li>
                <li>
                    <Link to="/sobre-nos" class="link">Sobre Nós</Link>
                </li>
                <li>
                    <Link to="/mensagem" class="link">Mensagem</Link>
                </li>
            </ul>
        </header>
    )
};