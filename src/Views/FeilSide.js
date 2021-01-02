import React, {useEffect} from "react";
import "../Styles/FeilSide.css";
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import logoTransparent from '../Assets/Logos/IN-Logo-sort.png';

const FeilSide = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    return(
        <div>
            <Navbar />
            <div id="FeilSideContainer">
                <div id="FeilSideFeilmelding">
                    <h1>404 - Side ikke funnet</h1>
                    <p id="FeilSideTekst1">{window.location.href}</p>
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