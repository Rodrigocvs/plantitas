
import Button from '@restart/ui/esm/Button';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/cartContext';


const CardWidget = () => {
    const {cartList} = useCartContext()
    console.log(cartList)
    return ( 
        <>
            <h2>Tu pedido es: </h2>
            {cartList.map(item => <h4>{item.cantidad} {item.item.name}. Precio Unitario: ${item.item.cost}</h4>)}
            <Link to={'/'}><Button variant='primary' >Seguir comprando</Button> </Link>
        </>
     );
}
 
export default CardWidget;