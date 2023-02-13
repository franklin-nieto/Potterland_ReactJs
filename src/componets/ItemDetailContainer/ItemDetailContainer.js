import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getDoc,doc } from "firebase/firestore"
import ItemDetail from "../ItemDetail/ItemDetail"
import { db } from "../../firebase/firebase"



const ItemDetailContainer = ()=>{
    const [product, setProduct] = useState({})
    const [loanding, setLoading] = useState(true)

    const{productId} = useParams()
    
    useEffect(() =>{
        (async () =>{
            const productRef = doc(db, "products", productId)

            try{

                const snapshot = await getDoc(productRef)

                const fields = snapshot.data()
                const productsAdapted = {id: snapshot.id, ...fields}
                setProduct(productsAdapted)
            }catch(error){
                console.log(error);
            }finally{
                setLoading(false)
            }
        })()
       
    },[productId])

    if(loanding){
        return <h1>Cargando...</h1>
    }

    return(
        <div>
            <h1>Detalle de Producto</h1>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer