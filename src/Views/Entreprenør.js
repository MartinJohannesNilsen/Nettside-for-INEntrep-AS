import React, { useEffect } from "react";
import $ from 'jquery';
import "../Styles/Entreprenør.css";
import Navbar from '../Components/Navbar'
import Bildekarusell from '../Components/Bildekarusell';
import Footer from '../Components/Footer'
import logoTransparentSort from "../Assets/Logos/IN-Logo-sort.png"
import firmanavn from "../Assets/Logos/Firmanavn.png"
import defaultImage from "../Assets/Images/Default/defaultImage.png"
import defaultAvatar from "../Assets/Images/Default/defaultAvatar.jpg"
import GraverFraFacebook from "../Assets/Images/GraverFraFacebook.jpg"
// import defaultImage2 from "../Assets/default/defaultImage2.jpg"


const Entreprenør = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return(
        <div>
        <Navbar />
            <div id="EntreprenørContainer">
                <div>
                    <Bildekarusell />
                </div>
                
                <div className="introText">
                    <img id="introTextImg" src={firmanavn} alt="Ivar Nilsen Entreprenør AS" />
                </div>

                <div id="tjenesterEntreprenør">
                    <div className="card" id="tjenesteboks">
                        <div className="card-body" id="tjenesterEntreprenørContainer">
                            <div id="tjenesterEntreprenørFørsteBoks">
                                <h5> Hvem er vi? </h5>
                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum id venenatis a condimentum vitae sapien pellentesque. Sed vulputate odio ut enim.  </p>
                                <p> Bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida. Mauris pellentesque pulvinar pellentesque habitant morbi tristique.</p>
                                <button type="button" className="btn btn-outline-dark btn-sm" id="tjenesterEntreprenørEntreprenørButton" onClick={() => {$('html, body').animate({scrollTop: $("#omOss").offset().top+1}, 2000);}}>Les mer</button>
                            </div>
                            <div id="tjenesterEntreprenørAndreBoks">
                                <h5> Hvilke tjenester utfører vi? </h5>
                                <p> Vi opererer for det meste på Østlandet, og utfører arbeid innen: </p>
                                <ul> 
                                    <li>Graving</li>
                                    <li>Riving</li>
                                    <li>Drenering</li>
                                    <li>Asfaltering</li>
                                    <li>Salg/transport av matjord, bark og fyllmasse</li>
                                    <li>Anlegg</li>
                                </ul>
                                <a href="/tjenester"><button type="button" className="btn btn-outline-dark btn-sm" id="tjenesterEntreprenørEntreprenørButton">Les mer</button></a>  
                            </div>
                            <div  id="tjenesterEntreprenørTredjeBoks">
                                <img src={logoTransparentSort} id="tjenesterEntreprenørLogo" alt="Logo for Ivar Nilsen Entreprenør AS"/>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div id="prosjekter">
                    <div id="prosjekterTittel"> 
                        <h3>Prosjekter</h3>
                        <hr id="prosjekterTittelUnderstrek"/>
                    </div>

                    <div className="prosjekterShowCards">
                        <div className="card" id="prosjekterShowCard1">
                            <img className="card-img-top" src={defaultImage} alt="Prosjektbilde" />
                            <div className="card-body">
                            <h5 className="card-title">Nordby utvikling</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="/prosjekt/1" className="btn btn-dark btn-sm">Les mer</a>
                            </div>
                        </div>
                        <div className="card" id="prosjekterShowCard2">
                            <img className="card-img-top" if="prosjekterShowCardImg" src={defaultImage} alt="Prosjektbilde" />
                            <div className="card-body">
                            <h5 className="card-title">Såstad</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="/prosjekt/2" className="btn btn-dark btn-sm">Les mer</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="ansatte">
                    <div id="ansatteTittel"> 
                        <h3>Ansatte</h3>
                        <hr id="ansatteTittelUnderstrek"/>
                    </div>
                    <div id="ansatteCards">
                        <div className="ansattCard" id="ansattCard1">
                            <img src={defaultAvatar} alt="Portrett av ansatt"/>
                            <h5>Ivar Nilsen</h5>
                            <p>Daglig leder</p>
                        </div>
                        <div className="ansattCard" id="ansattCard2">
                            <img src={defaultAvatar} alt="Portrett av ansatt"/>
                            <h5>Merete Monsen</h5>
                            <p>Kontoransvarlig</p>
                        </div>
                        <div className="ansattCard" id="ansattCard3">
                            <img src={defaultAvatar} alt="Portrett av ansatt"/>
                            <h5>David Viggo Andersen</h5>
                            <p>Anleggsmaskinfører</p>
                        </div>
                        <div className="ansattCard" id="ansattCard4">
                            <img src={defaultAvatar} alt="Portrett av ansatt"/>
                            <h5>Piotrek Baworowski</h5>
                            <p>Papapiotrek</p>
                        </div>
                        <div className="ansattCard" id="ansattCard5">
                            <img src={defaultAvatar} alt="Portrett av ansatt"/>
                            <h5>André Johansen</h5>
                            <p>Grunnarbeider</p>
                        </div>
                        <div className="ansattCard" id="ansattCard6">
                            <img src={defaultAvatar} alt="Portrett av ansatt"/>
                            <h5>Navn Navnesen</h5>
                            <p>Ansattittel</p>
                        </div>
                        <div className="ansattCard" id="ansattCard6">
                            <img src={defaultAvatar} alt="Portrett av ansatt"/>
                            <h5>Navn Navnesen</h5>
                            <p>Ansattittel</p>
                        </div>
                        <div className="ansattCard" id="ansattCard6">
                            <img src={defaultAvatar} alt="Portrett av ansatt"/>
                            <h5>Navn Navnesen</h5>
                            <p>Ansattittel</p>
                        </div>
                    </div>
                </div>

                <div id="omOss">
                    <div id="omOssTittel"> 
                        <h3>Kort om oss</h3>
                        <hr id="omOssTittelUnderstrek"/>
                    </div> 
                    <div id="omOssContainer">
                        <div>                      
                            <img src={GraverFraFacebook} id="omOssBilde" alt="Illustrerende bilde av firmaet"/>
                        </div>
                        <div id="omOssTekst">                      
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Cursus euismod quis viverra nibh cras pulvinar mattis nunc sed labore et dolore magna aliqua. Cursus euismod quis viverra nibh cras labete ut labore et dolore magna aliqua. Cursus euismod quis viverra nibh cras pulvinar mattis nunc sed.</p>
                            <a href="/om" className="btn btn-outline-light btn-sm">Les mer</a>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    )
}
export default Entreprenør;