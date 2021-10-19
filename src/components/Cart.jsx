
import { useCartContext } from '../context/cartContext';


const CardWidget = () => {
    const {cartList} = useCartContext()
    console.log(cartList)
    return ( 
        <>
            {cartList.map(item => <h2>La planta es {item.item.name} y la cantidad es {item.cantidad}</h2>)}
        </>
     );
}
 
export default CardWidget;