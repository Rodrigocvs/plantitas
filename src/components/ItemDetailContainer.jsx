import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom";
let planta = {id:1, name:'Potus', cost:'143', stock:12, img:'https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/potus-agua-potos.jpg', size:'G'}
    
const getfechUno = new Promise ((res, rej)=>{
    let resp = 200
    if(resp === 200){
        setTimeout(()=>{
            res(planta)
        },2000)
    }
})
const ItemDetailContainer = () => {
    const [planta, setPlanta] = useState({})
    const {idPlanta} = useParams ()
    useEffect(()=>{
                getfechUno
                .then(respuesta1 => {
                    setPlanta(respuesta1===idPlanta)
                })
                .catch(err => console.log(err))
    })

    return ( 
        <>
            <ItemDetail planta={planta}/>
        </>
     );
}
 
export default ItemDetailContainer;