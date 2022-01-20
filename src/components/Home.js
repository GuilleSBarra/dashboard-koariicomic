import React, {Component, useEffect} from "react";
import "../assets/css/Home.css"
import giphy from "../assets/img/giphy.gif"
import { Link } from 'react-router-dom'


class Home extends Component {
    render () {
        return (
            <div className="prueba3">
                <div className="prueba4">
                    <a href="https://koaricomic.herokuapp.com/">
                        <p className="ver6">Koari Comic Página WEB</p>
                    </a>
                    <img src={giphy} className="giphy"/>
                </div>
            </div>
        )
    }
}
export default Home