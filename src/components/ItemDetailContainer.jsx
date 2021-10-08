import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
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
    useEffect(()=>{
        getfechUno
        .then(respuesta1 => {
            setPlanta(respuesta1)
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