import React from "react";
import "../../css/contato.css";
import Menu from "../Layouts/menu";
import { Input, Button } from "antd";
import { useNavigate } from "react-router";

const { TextArea } = Input;

export default function Contato()
{

    let navigate = useNavigate();

    const redirect = () => 
    {
        let nome = document.getElementById("nome");
        let endereco = document.getElementById("endereco");
        let email = document.getElementById("email");


        if(nome.value == '' && endereco.value == '' && email.value == '')
        {
            alert('Preencha todos os campos!');
            nome.focus();
            endereco.focus();
            email.focus();

        }else{
            // window.location.href = "mensagem";
            navigate('/mensagem');

        }
    }

    return(
        <div>
            <Menu/>

            <div id="form">
            
                <h1>Fale Conosco</h1>

                <form method="POST" method="./Layouts/mensagem">
                    <div>
                        <label><span class="obrigatorio">*</span>Nome:</label>
                        <Input size="large" id="nome" class="input" placeholder="Nome Completo" required/>
                    </div>
                    <div>
                        <label><span class="obrigatorio">*</span>Endereço:</label>
                        <Input size="large" id="endereco" class="input" placeholder="Endereço Completo" required/>
                    </div>
                    <div>
                        <label><span class="obrigatorio">*</span>Email:</label>
                        <Input size="large" id="email" class="input" placeholder="email@email.com" required/>
                    </div>
                    <div id="select">
                        <label>Tipo:</label>
                        <select name="select">
                            <option value="sugestoes" selected>Sugestões</option>
                            <option value="reclamacoes">Reclamações</option>
                            <option value="elogios">Elogios</option>
                        </select>
                    </div>
                    <div>
                        <div id="msg">
                            <label>Mensagem</label>
                        </div>
                        <div>
                            <TextArea rows={10} cols={50} />
                        </div>
                    </div>
                    <Button type="primary" onClick={redirect}>Enviar</Button>
                </form>
            </div>
        </div>
    );
}