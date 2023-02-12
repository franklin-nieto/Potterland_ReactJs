import { Link } from "react-router-dom"

const CartWidget = ({ totalQuantity }) =>{
    return(
        <Link className="CartWidget">
            <img src="https://emojigraph.org/media/microsoft/shopping-cart_1f6d2.png" alt="cart-widget" className="CartImg"/>
                { totalQuantity }
        </Link>
    )
}

export default CartWidget