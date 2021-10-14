const ItemDetail = ({planta}) => {
/*     console.log('aca')
    console.log(planta)  */
    return ( 
        <>
            <h2>Nombre de la planta: {planta.name}</h2>
            <h3>Precio: ${planta.cost}</h3>
            <button>Comprar</button>
        </>
     );
}
 
export default ItemDetail;