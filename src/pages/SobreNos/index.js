import React from "react";
import "../../css/sobreNos.css";
import Menu from "../Layouts/menu";

export default function SobreNos()
{
    return(
        <div>
            <Menu/>
            <div id="mensagem_sobre_nos">

                <h1>Sobre Nós</h1>
                
                <strong>Missão:</strong>
                <p class="sobre_nos">
                    Nossa missão é muito mais que ser simplesmente um negócio pet. 
                    Nosso objetivo maior, é encantar os tutores e seus filhos de patas com uma experiência 
                    emocional positiva…Ajudar “pais e mães” de pets  a melhorarem a saúde e qualidade de vida
                    de seus peludos.
                </p>

                <strong>Valores:</strong>
                <p class="sobre_nos">– Amor e respeito aos animais</p>
                <p class="sobre_nos">– Cuidado</p>
                <p class="sobre_nos">– Profissionalismo</p>

                <strong>Visão:</strong>
                <p class="sobre_nos">
                    Oferecer produtos e serviços que contribuem para cuidar da saúde do animal, 
                    fazendo da visita ao petshop um passeio agradavel,  com troca de experiências entre  
                    apaixonados por animais.
                </p>
            
            </div>
        </div>
    );
}