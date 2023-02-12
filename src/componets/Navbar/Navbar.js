import { NavLink,  } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../cartContext/cartContex'
import { useContext } from 'react'

const NavBar = () => {

  const navigate = useNavigate()

  const {totalQuantity} = useContext(CartContext)

  return (
    <nav className="NavBar" >
          <h3 onClick={() => navigate('/')}>Potter Land</h3>
        <div className="Categories">
          <NavLink to={`/category/pelicula`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Peliculas</NavLink>
          <NavLink to={`/category/libro`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Libros</NavLink>
        </div>
        <CartWidget totalQuantity={totalQuantity}/>
    </nav>
  )
}

export default NavBar