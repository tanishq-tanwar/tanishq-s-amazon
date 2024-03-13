import { NavLink } from "react-router-dom";
import './App.css'

const Menubar = () => {
    return (
        <>
            <NavLink to='/' className="link">About</NavLink> &nbsp;&nbsp;&nbsp;
            <NavLink to='/products' className="link">Products</NavLink> &nbsp;&nbsp;&nbsp;
            <NavLink to='/cart' className="link">Cart</NavLink> &nbsp;&nbsp;&nbsp;
        </>
    )
}

export default Menubar;