import { CartWidget } from "../CartWidget/CartWidget"

export const NavBar = () => {
    return (
        <nav className="nav-container">
            <img src="/public/cafelogo.png" alt="Logo" className="navbar-logo" />
            <div className="nav-links">
                <button>Nacionales</button>
                <button>Extranjeros</button>
                <button>Vajilla</button>
            </div>
            <div className="cart-widget-container">
                <CartWidget />
            </div>
        </nav>
    )
}
