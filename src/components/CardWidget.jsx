import carrito from '../img/carro.png'
const CardWidget = () => {
    return ( 
        <>
            <a className='navbar-brand' href="">
            <img src={carrito} alt="" width="30" height="24" />
            </a>
        </>
     );
}
 
export default CardWidget;