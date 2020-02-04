import React, {Component} from "react";
import "../../css/FeilSide.css";
import {HashRouter, Route, NavLink} from 'react-router-dom';
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import logoTransparent from '../../img/logo/logoTransparentSort.png';


class FeilSide extends Component{
    render(){
        return(
            <div>
                <Navbar />
                <div id="FeilSideContainer">
                    <div id="FeilSideFeilmelding">
                        <h1>404 - Side ikke funnet</h1>
                        <p id="FeilSideTekst1">{this.props.location.pathname}</p>
                        <p id="FeilSideTekst2">Siden du har prøvd å nå, finnes ikke</p>
                        <button type="button" class="btn btn-outline-dark btn-sm" id="FeilSideButton" onClick={() => window.location.href = "/"}>Returner til hjemskjermen</button>
                    </div>
                    <div id="FeilSideBilde"><img src={logoTransparent} id="tjenesterBilde"/></div>
                </div>
                <Footer />
            </div>
        )
    }
    componentDidMount() {
        window.scrollTo(0, 0)
    }
}

export default FeilSide;