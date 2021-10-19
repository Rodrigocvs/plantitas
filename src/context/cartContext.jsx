import { createContext, useContext } from "react";
import { useState } from 'react';
const cartContext = createContext([])
export const useCartContext = ()=>useContext(cartContext)

export default function CartContextProvider({children}) {
    const [cartList, setCartList] = useState([])
    
    function addToCart(item, quant) {

         setCartList([...cartList, item])  //aca

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