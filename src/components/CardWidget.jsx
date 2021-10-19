import { Link } from 'react-router-dom';
import { useCartContext } from '../context/cartContext';
import carrito from '../img/carro.png'

const CardWidget = () => {
    const {cartList} = useCartContext()
    console.log(cartList)
    return ( 
        <>
            <Link to={'/cart'}> <a className='navbar-brand' href="">
                <img src={carrito} alt="" width="30" height="24" />
            </a></Link>
        </>
     );
}
 
export default CardWidget;