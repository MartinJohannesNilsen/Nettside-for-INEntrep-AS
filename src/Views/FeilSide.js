import React, {useEffect} from "react";
import "../Styles/FeilSide.css";
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import logoTransparent from '../IMG/logo/logoTransparentSort.png';

const FeilSide = props => {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    console.log(props)
    return(
        <div>
            <Navbar />
            <div id="FeilSideContainer">
                <div id="FeilSideFeilmelding">
                    <h1>404 - Side ikke funnet</h1>
                    {/* <p id="FeilSideTekst1">{props.location.pathname}</p> */}
                    <p id="FeilSideTekst2">Siden du har prøvd å nå, finnes ikke</p>
                    <button type="button" className="btn btn-outline-dark btn-sm" id="FeilSideButton" onClick={() => window.location.href = "/"}>Returner til hjemskjermen</button>
                </div>
                <div id="FeilSideBilde"><img src={logoTransparent} id="tjenesterBilde" alt="Firmalogo"/></div>
            </div>
            <Footer />
        </div>
    )
}

export default FeilSide;