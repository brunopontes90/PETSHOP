import React from "react";
import "../../css/mensagem.css";
import { Link } from "react-router-dom";

export default function Mensagem()
{
    return(
        <div>
            <div id="body">
                <h1>Mensagem enviada</h1>
                <p id="mensagem">
                    Agradecemos a sua preferencia.
                </p>
                <Link id="btn" to="/">Voltar a Home</Link>
            </div>
        </div>
        
    );
};