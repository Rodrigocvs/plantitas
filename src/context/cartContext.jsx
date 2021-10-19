import { createContext, useContext } from "react";
import { useState } from 'react';
const cartContext = createContext([])
export const useCartContext = ()=>useContext(cartContext)

export default function CartContextProvider({children}) {
    const [cartList, setCartList] = useState([])
    
    function addToCart(item, quant) {
/*         item.quant = quant;
        const newCart = cartList.filter(elementCart=>elementCart.id != item.id)
        if(quant > 0){
            newCart.push(item)
        } */
         setCartList([...cartList, item])  //aca
/*         setCartList(newCart) */
    }
    console.log(cartList)
    return(
        <cartContext.Provider value={{
            cartList,
            addToCart
        }}>
            {children}
        </cartContext.Provider>
    )
}