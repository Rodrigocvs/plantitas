
import ItemCount from './ItemCount';
import Card from 'react-bootstrap/Card';
const Item = ({id, name, cost, stock, img}) => {
    const onAdd = (cant) =>{
        console.log(cant)
    }
    return ( 
        <div className='card text-center'>  
            <Card key={id} style={{}}>
                <Card.Img variant="top" src={img} alt='fotos' />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            Descripcion no disponible
                        </Card.Text>
                        <h3>${cost}</h3>
                        <ItemCount stock= {stock} initial={1} onAdd={onAdd}/>
                    </Card.Body>
            </Card>
                    
                
                
        </div>
     );
}
 
export default Item;