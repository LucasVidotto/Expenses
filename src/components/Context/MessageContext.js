import React, { useContext } from "react";

import Context from "./Context";

export default function Counter() {
    const [total, setTotal] = useContext(Context);
    const [nome, setNome] = useContext(Context);

    return (
        <div>
            <h3>{nome}</h3>
            <input type="text" onChange={e => setNome(e.target.value)}></input>
            <button type="button">
                Contador
            </button>
        </div>
    );
}