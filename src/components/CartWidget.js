import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import {useContext} from 'react';
import { contextCarrito } from "./CartContext";
import { Link } from "react-router-dom";


const CartWidget = () => {

    const {contadorProductos} = useContext(contextCarrito)
    return (
        <div>
        <Link to='/carrito'>
            <FontAwesomeIcon icon={faShoppingCart}/>
        </Link>
        {contadorProductos()> 0 && <p>{contadorProductos()}</p>}
        </div>
    )
}

export default CartWidget;