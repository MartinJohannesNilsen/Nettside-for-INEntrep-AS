import React, { useState } from 'react';
import '../Styles/Footer.css';

const Footer = () => {
    const [location] = useState(window.location.href)

    const tittel = urlProp => {
        if(urlProp.toLowerCase().includes("eiendom")){
            return <h5 className="text-uppercase font-weight-bold">Ivar Nilsen Eiendom AS</h5>
        }else{
            return <h5 className="text-uppercase font-weight-bold">Ivar Nilsen Entreprenør AS</h5>
        } 
    }

    return (
        <div className="Footer">
            <footer className="page-footer font-small teal pt-4">
                <div className="container-fluid text-center text-md-left">
                    <div className="row">
                    <div className="col-md-6 mt-md-0 mt-3" id="footerLinker">
                        {tittel(location)}
                        <div><a target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/Årvollskogen+42,+1529+Moss/@59.4194094,10.6998355,17z/data=!3m1!4b1!4m5!3m4!1s0x464152c6c92b6c33:0x56a364e71728fba2!8m2!3d59.4194067!4d10.7020188" className="sortTekst" title="Se besøksadresse til Ivar Nilsen Entreprenør AS">Årvollskogen 42, 1529 Moss</a></div>
                        <div>Tlf: <a href="tel:004745005500" className="sortTekst" title="Ring Ivar Nilsen Entreprenør AS">+47 45 00 55 00</a></div>
                        <div>Mail: <a href="mailto:ivar@ivar-nilsen.no" className="sortTekst" title="Send mail til Ivar Nilsen Entreprenør AS">ivar@ivar-nilsen.no</a></div>
                    </div>
                    <hr className="clearfix w-100 d-md-none pb-3"/>
                    <div className="col-md-6 mb-md-0 mb-3" id="footerLinker">
                        <h5 className="text-uppercase font-weight-bold">Vil du vite mer?</h5>
                        <div><a href="/om" className="sortTekst" title="Les mer om Ivar Nilsen Entreprenør AS">Om oss </a></div>
                        <div><a href="/tjenester" className="sortTekst" title="Les mer om tjenestene vi tilbyr">Tjenester vi tilbyr</a></div>
                        <div>
                            <div className="dropup" id="footerDropUp">
                                <p className="dropbtn" title="Les mer om våre større prosjekter">Prosjekter</p>
                                <div className="dropup-content">
                                    <a href="/Prosjekt/1" id="footerProsjekt">Nordby utvikling</a>
                                    <a href="/Prosjekt/2" id="footerProsjekt">Såstad</a>
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


export default Footer;