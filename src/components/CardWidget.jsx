import { Link } from 'react-router-dom';
import carrito from '../img/carro.png'
const CardWidget = () => {
    return ( 
        <>
            <Link to={'/cart'}> <a className='navbar-brand' href="">
                <img src={carrito} alt="" width="30" height="24" />
            </a></Link>
        </>
     );
}
 
export default CardWidget;