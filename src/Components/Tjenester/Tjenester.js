import React, {Component} from "react";
import "../../css/Tjenester.css";
import logoTransparent from '../../img/logo/logoTransparentSort.png'

class Tjenester extends Component{
    render(){
        return(
            <div>
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
                        <img src={logoTransparent} id="tjenesterBilde"/>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount() {
        window.scrollTo(0, 0)
    }
}
export default Tjenester;