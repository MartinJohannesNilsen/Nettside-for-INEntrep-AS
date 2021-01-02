import React, {useEffect} from "react";
import "../Styles/Kontakt.css";
import logoTransparent from '../Assets/Logos/IN-Logo-sort.png'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

const Kontakt = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return(
        <div>
            <Navbar />
            <div id="kontaktContainer">
                <div id="kontaktTittel"> 
                    <h3>Kontakt oss</h3>
                    <hr id="kontaktUnderstrek"/>
                </div>
                <div id="kontaktInfo">
                    <p id="kontaktTekst">Ønsker du å vite om vi kan utføre tjenesten du ønsker å få gjort? Ta kontakt med oss for tilbud og referanser!</p>
                    <div id="kontaktAvsnitt">
                        <h6>Ivar Nilsen</h6>
                        <h7>Daglig leder</h7>
                        <hr id="kontaktHr"/>
                        <div>Tlf: <a href="tel:004745005500" title="Ring Ivar Nilsen Entreprenør AS">+47 45 00 55 00</a></div>
                        <div>Mail: <a href="mailto:ivar@ivar-nilsen.no" title="Send mail til Ivar Nilsen Entreprenør AS">ivar@ivar-nilsen.no</a></div>
                    </div>
                    <div id="kontaktAvsnitt">
                        <h6>Postadresse/besøksadresse</h6>
                        <hr id="kontaktHr"/>
                        <div><a target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/Årvollskogen+42,+1529+Moss/@59.4194094,10.6998355,17z/data=!3m1!4b1!4m5!3m4!1s0x464152c6c92b6c33:0x56a364e71728fba2!8m2!3d59.4194067!4d10.7020188" title="Se besøksadresse til Ivar Nilsen Entreprenør AS">Årvollskogen 42, 1529 Moss</a></div>                
                    </div>
                    <img src={logoTransparent} id="kontaktBilde" alt="Firmalogo"/>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Kontakt;