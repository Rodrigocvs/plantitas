import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const ItemListContainer = (props) => {

    return ( 
        <>
        <h1>Hola {props.greeting} !</h1>
        { <ItemList/> }
        </>
     );
}
 
export default ItemListContainer;