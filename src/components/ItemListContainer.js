import { useEffect, useState } from "react";
import ItemList from './ItemList';

import { useParams } from "react-router-dom";
import {db} from '../utils/firebaseConfig';
import { collection, getDocs, query, where, orderBy } from "firebase/firestore"; 

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const { idCategory } =useParams();

    useEffect(() => {
            const fetchFromFirestore = async () => {
                let q;
                if (idCategory) {
                    q = query(collection(db, 'products'), where('categoryId', '==', parseInt(idCategory)))

<<<<<<< HEAD
                } else {
                    q = query(collection(db, "products"), orderBy('price'));
=======
                }else {
                    q = query(collection(db, "products"));
>>>>>>> 617c3f1a24b9399fa73983dd22133b67986523a2
                }
               
                const querySnapshot = await getDocs(q);
                const dataFromFirestore = querySnapshot.docs.map(item => ({
                id: item.id,
                ...item.data()

            }))
           return dataFromFirestore;

           

            }  

        fetchFromFirestore()
        .then(result => setDatos(result))
        .catch(err => console.log(err))
    }, [idCategory]);

  

    return (

        <ItemList items={datos} />
       
    );
}

export default ItemListContainer;