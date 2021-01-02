import React, {useEffect} from "react";
import "../Styles/Tjenester.scss";
import logoTransparent from '../Assets/Logos/IN-Logo-sort.png'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

const Tjenester = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return(
        <div>
            <Navbar />
            <div id="tjenesterContainer">
                <div id="tjenesterTittel"> 
                    <h3>Tjenester</h3>
                    <hr id="tjenesterUnderstrek"/>
                </div>
                <div id="tjenesterInfo">
                    <p id="tjenesterTekst">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam sem et tortor consequat id. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue. Malesuada fames ac turpis egestas.</p>
                    <div id="tjenesterAvsnitt">
                        <h5>Graving</h5>    
                        <hr id="tjenesterHr"/>
                        <div><p id="tjenesterTekst">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus sit amet luctus venenatis lectus. Elementum curabitur vitae nunc sed velit dignissim sodales.</p></div>
                    </div>
                    <div id="tjenesterAvsnitt">
                        <h5>Riving</h5>    
                        <hr id="tjenesterHr"/>
                        <div><p id="tjenesterTekst">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus sit amet luctus venenatis lectus. Elementum curabitur vitae nunc sed velit dignissim sodales.</p></div>
                    </div>
                    <div id="tjenesterAvsnitt">
                        <h5>Drenering</h5>    
                        <hr id="tjenesterHr"/>
                        <div><p id="tjenesterTekst">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus sit amet luctus venenatis lectus. Elementum curabitur vitae nunc sed velit dignissim sodales.</p></div>
                    </div>
                    <div id="tjenesterAvsnitt">
                        <h5>Asfaltering</h5>    
                        <hr id="tjenesterHr"/>
                        <div><p id="tjenesterTekst">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus sit amet luctus venenatis lectus. Elementum curabitur vitae nunc sed velit dignissim sodales.</p></div>
                    </div>
                    <div id="tjenesterAvsnitt">
                        <h5>Salg/Transport av matjord, bark og fyllmasse</h5>    
                        <hr id="tjenesterHr"/>
                        <div><p id="tjenesterTekst">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus sit amet luctus venenatis lectus. Elementum curabitur vitae nunc sed velit dignissim sodales.</p></div>
                    </div>
                    <div id="tjenesterAvsnitt">
                        <h5>Anlegg</h5>    
                        <hr id="tjenesterHr"/>
                        <div><p id="tjenesterTekst">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus sit amet luctus venenatis lectus. Elementum curabitur vitae nunc sed velit dignissim sodales.</p></div>
                    </div>
                    <img src={logoTransparent} id="tjenesterBilde" alt="Firmalogo"/>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Tjenester;