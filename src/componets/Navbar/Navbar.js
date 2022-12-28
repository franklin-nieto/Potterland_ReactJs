import "./Navbar.css"

const Navbar = () =>{
    return(
        <nav className="Navbar"> 
            <h1>Potterland</h1>
                <ul>
                    <li><a href="#">Nosotros</a></li>
                    <li><a href="#">Coleccionables</a></li>
                    <li><a href="#">Peliculas y libros</a></li>
                    <li><a href="#"> Contacto</a></li>
                </ul>
            </nav>
    )
}

export default Navbar
