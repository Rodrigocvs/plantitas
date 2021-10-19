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
            {/* {cartList.map(item => <h2>La planta es {item.item.name} y la cantidad es {item.cantidad}</h2>)} */}
        </>
     );
}
 
export default CardWidget;