import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom";
import {getFechOne} from './util/FuntionUtil';

const ItemDetailContainer = () => {

    const [planta, setPlanta] = useState() ;

    const { idPlanta } = useParams ();
   
    useEffect(()=>{
        getFechOne(idPlanta)
        .then(planta => setPlanta(planta))
    }, [])
    

    return ( 
        <>
            <ItemDetail planta={planta}/>
        </>
     );
}
 
export default ItemDetailContainer;