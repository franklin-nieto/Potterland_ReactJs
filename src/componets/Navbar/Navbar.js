import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"

const Navbar = () =>{
    return(

        <nav style={{display: "flex", justifyContent: "space-around"}}>
            <h1>Potterland</h1>
        <div>
        <Link to='/category/Peliculas' style={{margin:10}}>Peliculas</Link>
        <Link to='/category/Libros'> Libros</Link>
        </div>
        <CartWidget/>
        </nav>
    )
}

export default Navbar
