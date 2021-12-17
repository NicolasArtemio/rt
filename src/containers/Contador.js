import React, { useState } from "react"

const Contador = ( {stock, initial, onAdd}) => {

    const [ Contador, setContador ] = useState(1);

    const sumar = () => {
        if (Contador < stock){
        setContador(Contador + 1)
        }
    }
    const restar = () => {
        if (Contador > initial) {
            setContador(Contador - 1)
        }
    }

    return (
    <div className="divCentrado">
        <button onClick={() => restar()} disabled={Contador == initial}>-</button>
        <p>{Contador}</p>
        <button onClick={() => sumar()} disabled={Contador >= stock}>+</button>
        <button> Agregar al Carrito </button>
    </div>
    )
}

export default Contador