import { useContext } from "react";
import { CartContext } from "./CartContext";
import Item from "./Item";
import '../App.css';
import { TextSnippet } from "@mui/icons-material";

import FormatNumber from "../utils/FormatNumber";
import styled from "styled-components";

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
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
    const test = useContext(CartContext);
    
    return (
        <>
            <h1>I'm Cart </h1>
                <button onClick={test.removeList}>Vaciar carrito</button>
        

            <ul>
                {   
                   
                (test.cartList.length === 0)
                ? <p>Tu carrito esta vacio </p>
                : test.cartList.map(item => <li key={item.idItem}> <img className="imagen-carrito" src={item.imgItem} alt=""/> 
                {item.nameItem} - cantidad: {item.qtyItem} - <div>{item.qtyItem} item(s)- <div> {item.priceItem} cada uno </div></div> 
                - <div> total: {test.calcTotalPerItem(item.idItem)} soles</div> 
                <button onClick={() => test.deleteThis(item.idItem)}>Eliminar producto</button></li>
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
                <Button>PAGAR</Button>
            </Summary>

            }
             
        </>
    );
}

export default Cart;