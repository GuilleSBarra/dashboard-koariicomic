import React, {Component} from "react";
import "../../assets/css/Header.css"
import eva from "../../assets/img/eva.png"
import { Link } from 'react-router-dom'


class Header extends Component {
    render () {
        return (
            <div className="main-header">
                <div className="center-test">
                    <div className="logo-y-nombre">
                        <img src={eva} className="icon"/>
                        <p className="text-header">Koari Comic Store</p>
                        <p className="text-header-sub">A great power comes with a great responsibility - Uncle Ben</p>
                    </div>
                </div>
                <nav className="mainHeaderBottom">
                    <ul>
                        <Link to="/products">
                        <li>Productos</li>
                        </Link>
                        <Link to="/users">
                        <li>Usuarios</li>
                        </Link>     
                        <Link to="/">
                        <li>Home</li>
                        </Link>
                    </ul>
                </nav>
            </div>
        )
    }
}
export default Header