import { Link } from "react-router-dom"

const Item = ({id,nombre,img, precio}) =>{
        return(
            <div>
                <h1>{nombre}</h1>
                <img src={img} alt={nombre} style={{width: 200}}/>
                <p>$ {precio}</p>
                <Link to={`/item/${id}`}>Ver Detalle</Link>
            </div>
        )    
}

export default Item