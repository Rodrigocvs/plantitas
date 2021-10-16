import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
const ItemDetail = ({planta}) => {
/*     console.log('aca')
    console.log(planta)  */
    return ( 
        <>
            <h2>Nombre de la planta: {planta.name}</h2>
            <Col xs={6} md={4}>
                <Image src={planta.img} fluid rounded/>
            </Col>
            <h3>Precio: ${planta.cost}</h3>
            <Button>Comprar</Button>
        </>
     );
}
 
export default ItemDetail;