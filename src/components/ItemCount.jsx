import { useState } from "react";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial)
    const [cambiarBoton, setCambiarBoton] = useState(true)

    function Sumar() {
        if (count < stock){
        setCount(count+1)}
    }
    function Restar() {
        if (count!= initial){
        setCount(count-1)}
    }
    const addCarrito=()=>{
        onAdd(count)
        setCambiarBoton(false)
    }

    return ( 
        <>
            
            <Button variant="primary" onClick={Restar} >-</Button>
            {cambiarBoton ? 
            <Button variant="secundary" onClick={addCarrito}>Agregar al carrito ({count})</Button>
            :
            <Link to='/cart'><Button variant="secundary" >Terminar compra</Button></Link> } 
            <Button variant="primary" onClick={Sumar}>+</Button>
           
        </>
     );
}
 
export default ItemCount;