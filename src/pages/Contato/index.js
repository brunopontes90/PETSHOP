import React from "react";
import Menu from "../Layouts/menu";
import { Input, Button } from "antd";
const { TextArea } = Input;

export default function Main()
{
    return(
        <div>
            <Menu/>
            <h1>Fale Conosco</h1>
            <form method="POST" action="#">
                <div>
                    <label>Nome:</label>
                    <Input size="large" placeholder="Nome Completo" />
                </div>
                <div>
                    <label>Endereço:</label>
                    <Input size="large" placeholder="Endereço Completo" />
                </div>
                <div>
                    <div>
                        <label>Mensagem</label>
                    </div>
                    <div>
                        <TextArea rows={10} cols={50} />
                    </div>
                </div>
                <Button type="primary" htmlType="submit">Enviar</Button>
            </form>
        </div>
    );
}