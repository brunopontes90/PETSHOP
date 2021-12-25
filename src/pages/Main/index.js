import React from "react";
import "../../css/main.css";
import Menu from "../Layouts/menu";

export default function Main()
{
    return(
        <div>
            <Menu/>

            <div id="main">

                <h1>Seja Bem Vindo</h1>

                <p class="paragrafo_contato">Seja bem vindo ao nosso Pet Shop</p>
                <p class="paragrafo_contato">Oferecemos serviço de qualidade que seu pet merece.</p>
                <p class="paragrafo_contato">Temos banho e tosa, parque de diversão e hotel caso queiram viajar!</p>
            
            </div>           
        </div>
    );
};
