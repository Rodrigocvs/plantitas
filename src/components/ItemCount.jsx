import { useState } from "react";
import Button from 'react-bootstrap/Button';
const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial)

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
    }

    return ( 
        <>
            
            <Button variant="primary" onClick={Restar} >-</Button>
            <Button variant="secundary" onClick={addCarrito}>Agregar al carrito ({count})</Button>
            <Button variant="primary" onClick={Sumar}>+</Button>
        </>
     );
}
 
export default ItemCount;