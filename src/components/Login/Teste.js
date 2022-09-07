import React, { useState } from "react";
import Message from "../Context/Message";
function Teste() {
    const [nome, setNome] = useState('Nome');
    return (
        <Message.Provider value={[nome, setNome]} >
            <div>
                <p>App.js: {nome}</p>
            </div>
        </Message.Provider >
    )
}

export default Teste;