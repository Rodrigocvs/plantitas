import Item from "./Item"
const ItemList = (props) => {
    return ( 
        <>
        
        <div className='container d-flex justify-content-center h-100 align-items-center'>
            <div className="row">
                    {props.plantas.map(planta => (
                        <div className='col-md-3' key={planta.id} >
                            <Item id={planta.id} name={planta.name} cost={planta.cost} stock={planta.stock} img={planta.img}/>
                        </div>
                    ))}
                
            </div>
        </div> 
        </>
     );
}
 
export default ItemList;