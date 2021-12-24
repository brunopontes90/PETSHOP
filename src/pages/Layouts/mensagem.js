import React from "react";
import { Link } from "react-router-dom";

export default function Mensagem()
{
    return(
        <div>
            <h1>Mensagem enviada</h1>
            <div>
                <Link to="/contato">Voltar a Home</Link>
            </div>
        </div>
        
    );
};