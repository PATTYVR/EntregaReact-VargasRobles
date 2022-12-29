import { useContext } from "react";
import { CartContext } from "./CartContext";
import Item from "./Item";
import '../App.css';
import { TextSnippet } from "@mui/icons-material";
import { collection, increment, serverTimestamp, updateDoc} from "firebase/firestore";
import FormatNumber from "../utils/FormatNumber";
import styled from "styled-components";
import { doc, setDoc } from "firebase/firestore";
import { db } from '../utils/firebaseConfig';



const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;
const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color:  #720e9e;
  border-radius: 5px ;
  color: white;
  font-weight: 800;
`;



const Cart = () => {
    const test = useContext(CartContext);

    const createOrder = () => {
        const order = {
            buyer: {
                name: "Patricia Vargas Robles",
                email: "dashapalomino1503@gmail.com",
                phone: "967734758"
            },
            date: serverTimestamp(),
            items: test.cartList.map(item => ({
                id: item.idItem,
                title: item.nameItem,
                price: item.priceItem,
                qty: item.qtyItem
            })),
            total: test.calcTotal()
        }
       

        const createOrderInFirestore = async () => {
            const newOrderRef = doc(collection(db, "orders"))
             await setDoc(newOrderRef, order);
            return newOrderRef
    }

    createOrderInFirestore ()
    .then(result => {
        alert("Tu orden " + result.id + " ha sido creada" )
         test.cartList.forEach(async(item) => {
            const itemRef = doc( db, "products", item.idItem);
            await updateDoc(itemRef, {
                stock: increment(-item.qtyItem)
            });
         })
        test.clear()
       
    })
   
}

    return (
        <>
            <h1 className="tituloCarro">Carrito </h1>
                <button className="botonVaciarCarrito" onClick={test.clear}>Vaciar carrito</button>
        

            <ul>
                {   
                   
                (test.cartList.length === 0)
                ? <p className="parrafoCarritoVacio">Tu carrito esta vacio </p>
                : test.cartList.map(item => <li className="listaDeProductos" key={item.idItem}> <img className="imagen-carrito" src={item.imgItem} alt=""/> 
                {item.nameItem}   <div>cantidad: {item.qtyItem} item(s) <div> {item.priceItem} cada uno </div></div> 
                 <div> total: {test.calcTotalPerItem(item.idItem)} soles</div> 
                <button className="botonEliminarProducto" onClick={() => test.deleteThis(item.idItem)}>Eliminar producto</button></li>
               )
                }
               
            </ul>
            {
                test.cartList.length > 0 &&
                <Summary>
                <SummaryTitle>TOTAL A PAGAR</SummaryTitle>
                <SummaryItem>
                    <SummaryItemText>Subtotal</SummaryItemText>
                    <SummaryItemPrice><FormatNumber number={test.calcSubTotal()} /></SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Taxes</SummaryItemText>
                    <SummaryItemPrice><FormatNumber number={test.calcTaxes()} /></SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Taxes Discount</SummaryItemText>
                    <SummaryItemPrice><FormatNumber number={-test.calcTaxes()} /></SummaryItemPrice>
                </SummaryItem>
                <SummaryItem type="total">
                    <SummaryItemText>Total</SummaryItemText>
                    <SummaryItemPrice><FormatNumber number={test.calcTotal()} /></SummaryItemPrice>
                </SummaryItem>
                <Button onClick={createOrder}>PAGAR</Button>
            </Summary>

            }
             
        </>
    );
}

 export default Cart;