import { createContext, useState } from "react";

export const CartContext = createContext ();

const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState ([]); 


    const addToCart = (item, qty) => {
        let found = cartList.find(product => product.idItem === item.id );
        if (found === undefined) {
        setCartList([
            ...cartList,
            {
                idItem:item.id,
                imgItem: item.image[0],
                nameItem: item.name,
                priceItem: item.price,
                qtyItem: qty 

            }
        ])
    } else {
        found.qtyItem += qty;
        setCartList([...cartList])
    }

    }

    const removeList = () => {
        setCartList([]);
    }
    


    const deleteThis = (id) => {
        const eliminarProducto = cartList.filter(item => item.idItem !== id);
        setCartList(eliminarProducto);
    }

    const calcTotalPerItem = (idItem) => {
        let index = cartList.map(item => item.idItem).indexOf(idItem);
        return cartList[index].priceItem * cartList[index].qtyItem;
    }

    
    const calcSubTotal = () => {
        let totalPerItem = cartList.map(item => calcTotalPerItem(item.idItem));
        return totalPerItem.reduce((previousValue, currentValue) => previousValue + currentValue);
    }

    const calcTaxes = () => {
        return calcSubTotal() * 0.18;
    }

    const calcTotal = () => {
        return calcSubTotal();
    }

    const calcItemsQty = () => {
        let qtys = cartList.map(item => item.qtyItem);
        return qtys.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
    }

   

    return (
            <CartContext.Provider value={{cartList, addToCart, deleteThis, removeList, calcTotalPerItem, calcSubTotal, calcTaxes, 
                calcTotal,
                calcItemsQty   }}>
                { children }

            </CartContext.Provider>
    );

}

export default CartContextProvider; 