
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetails";
import { doc, getDoc } from "firebase/firestore";
import { db } from '../utils/firebaseConfig';



const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    const { idProducto } = useParams();

    useEffect(() => {
        const unProducto = async () => {
            const docRef = doc(db, "products", idProducto);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                return {
                    id: idProducto,
                    ...docSnap.data()
                }
            } else {
                console.log("No such document");
            }
       
        }
        unProducto()    
            .then(result => setDato(result))
            .catch(err => console.log(err))
  
    }, []);
    
    return (
        <ItemDetail item={dato} />
    );
}

export default ItemDetailContainer;


