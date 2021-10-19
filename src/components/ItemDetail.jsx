import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';

import ItemCount from './ItemCount';
import { useState } from 'react';
import {useCartContext} from './../context/cartContext'

const ItemDetail = ({planta}) => {
/*     console.log('aca')
    console.log(planta)  */
    const [cantidad, setCantidad] = useState(0)

    const onAdd = (cant) =>{
        console.log(cant)
        setCantidad(cant)
        addToCart({item:planta, cantidad: cant})
    }
    const {addToCart} = useCartContext()
    return ( 
        <>
            <h2>Nombre de la planta: {planta.name}</h2>
            <Col xs={6} md={4}>
                <Image src={planta.img} fluid rounded/>
            </Col>
            <h3>Precio: ${planta.cost}</h3>
            <ItemCount stock= {planta.stock} initial={1} onAdd={onAdd}/>
        </>
     );
}
 
export default ItemDetail;