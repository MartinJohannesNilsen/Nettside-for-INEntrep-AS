import React, {Component} from "react";
import "../../css/Kontakt.css";
import logoTransparent from '../../img/logo/logoTransparentSort.png'

class Kontakt extends Component{
    render(){
        return(
            <div>
                <div id="kontaktContainer">
                    <div id="kontaktTittel"> 
                        <h3>Kontakt oss</h3>
                        <hr id="kontaktUnderstrek"/>
                    </div>
                    <div id="kontaktInfo">
                        <p id="kontaktTekst">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam sem et tortor consequat id. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue. Malesuada fames ac turpis egestas.</p>
                        <div id="kontaktAvsnitt">
                            <h6>Ivar Nilsen</h6>
                            <h7>Daglig leder</h7>
                            <hr id="kontaktHr"/>
                            <div><a>Tlf: </a><a href="tel:004745005500">+47 45 00 55 00</a></div>
                            <div><a>Mail: </a><a href="mailto:ivar@ivar-nilsen.no">ivar@ivar-nilsen.no</a></div>
                        </div>
                        <div id="kontaktAvsnitt">
                            <h6>Postadresse/besøksadresse</h6>
                            <hr id="kontaktHr"/>
                            <div><a target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/Årvollskogen+42,+1529+Moss/@59.4194094,10.6998355,17z/data=!3m1!4b1!4m5!3m4!1s0x464152c6c92b6c33:0x56a364e71728fba2!8m2!3d59.4194067!4d10.7020188">Årvollskogen 42, 1529 Moss</a></div>                
                        </div>
                        <img src={logoTransparent} id="kontaktBilde"/>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount() {
        window.scrollTo(0, 0)
    }
}
export default Kontakt;