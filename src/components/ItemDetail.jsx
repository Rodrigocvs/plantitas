const ItemDetail = ({planta}) => {

    return ( 
        <>
            <h2>Nombre de la planta: {planta.name} </h2>
            <img src={planta.img} alt="" srcset="" />
            <h2>Su precio es: ${planta.cost}</h2>
            <button>Comprar</button>
        </>
     );
}
 
export default ItemDetail;