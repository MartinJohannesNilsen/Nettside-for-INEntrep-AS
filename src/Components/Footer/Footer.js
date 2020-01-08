import React, { Component } from 'react';
import '../../css/Footer.css';

class Footer extends Component<> {
    constructor(props){
        super(props);
        this.state = {location: window.location.href}
    }
  render() {  
    function tittel(urlProp){
        console.log(urlProp);
        if(urlProp.toLowerCase().includes("eiendom")){
            return <h5 class="text-uppercase font-weight-bold">Ivar Nilsen Eiendom AS</h5>
        }else{
            return <h5 class="text-uppercase font-weight-bold">Ivar Nilsen Entreprenør AS</h5>
        } 
    }
    return (
        <div class="Footer">
            <footer class="page-footer font-small teal pt-4">
                <div class="container-fluid text-center text-md-left">
                    <div class="row">
                    <div class="col-md-6 mt-md-0 mt-3" id="footerLinker">
                        {tittel(this.state.location)}
                        <div><a target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/Årvollskogen+42,+1529+Moss/@59.4194094,10.6998355,17z/data=!3m1!4b1!4m5!3m4!1s0x464152c6c92b6c33:0x56a364e71728fba2!8m2!3d59.4194067!4d10.7020188" class="sortTekst">Årvollskogen 42, 1529 Moss</a></div>
                        <div><a>Tlf: </a><a href="tel:004745005500" class="sortTekst">+47 45 00 55 00</a></div>
                        <div><a>Mail: </a><a href="mailto:ivar@ivar-nilsen.no" class="sortTekst">ivar@ivar-nilsen.no</a></div>
                    </div>
                    <hr class="clearfix w-100 d-md-none pb-3"/>
                    <div class="col-md-6 mb-md-0 mb-3" id="footerLinker">
                        <h5 class="text-uppercase font-weight-bold">Vil du vite mer?</h5>
                        <div><a href="#/om" class="sortTekst">Om oss </a></div>
                        <div><a href="#/tjenester" class="sortTekst">Tjenester vi tilbyr</a></div>
                        <div>
                            <div class="dropup" id="footerDropUp">
                                <a class="dropbtn">Prosjekter</a>
                                <div class="dropup-content">
                                    <a href="#/Prosjekt/1" id="footerProsjekt">Nordby utvikling</a>
                                    <a href="#/Prosjekt/2" id="footerProsjekt">Såstad</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </footer>
        </div>
    )
  }
}

export default Footer;