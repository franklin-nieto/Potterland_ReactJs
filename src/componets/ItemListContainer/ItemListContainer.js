import {useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase/firebase";

const ItemListContainer = ({greeting}) =>{
    const [products, setProducts] = useState([])
    const [loanding, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() =>{
    (async () =>{
        setLoading(true)

        const collectionRef = collection(db, "products")
        try{
            const response = await getDocs(collectionRef)

            const productsAdapted = response.docs.map(doc=>{
                const fields = doc.data()

                return {id: doc.id, ...fields}
            })
            setProducts(productsAdapted)
        }catch(error){
            console.log(error);
        }finally{
            setLoading(false)
        }
    })()
       
    }, [categoryId])

    if(loanding){
        return <h1>Cargando productos...</h1>
    }
    return(
        <div>
            <h1>{categoryId ? `Estos son nuestros productos de la categoria ${categoryId}`: `estos son nuestros productos`}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer