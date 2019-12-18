import React, {Component} from "react";
import "../../css/Entreprenør.css";
import Bildekarusell from '../Bildekarusell/Bildekarusell';
import logoTransparentSort from "../../img/logo/logoTransparentSort.png"
import firmanavn from "../../img/logo/firmanavn.png"
import defaultImage from "../../img/default/defaultImage.png"
import defaultAvatar from "../../img/default/defaultAvatar.jpg"
import defaultImage2 from "../../img/default/defaultImage2.jpg"
import $ from 'jquery';

class Entreprenør extends Component{
    componentDidMount(){
        $('html, body').animate({
            scrollTop: $("#omOss").offset().top
        }, 2000);
    }
    render(){
        return(
            <div>

                <div>
                    <Bildekarusell />
                </div>
                
                <div class="introText">
                    <img id="introTextImg" src={firmanavn} />
                </div>

                <div id="tjenesterEntreprenør">
                    <div class="card" id="tjenesteboks">
                        <div class="card-body" id="tjenesterEntreprenørContainer">
                            <div id="tjenesterEntreprenørFørsteBoks">
                                <h5> Hvem er vi? </h5>
                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum id venenatis a condimentum vitae sapien pellentesque. Sed vulputate odio ut enim.  </p>
                                <p> Bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida. Mauris pellentesque pulvinar pellentesque habitant morbi tristique.</p>
                                <button type="button" class="btn btn-outline-dark btn-sm" id="tjenesterEntreprenørEntreprenørButton" onClick={() => {$('html, body').animate({scrollTop: $("#omOss").offset().top+1}, 2000);}}>Les mer</button>
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
                                <a href="#/tjenester"><button type="button" class="btn btn-outline-dark btn-sm" id="tjenesterEntreprenørEntreprenørButton">Les mer</button></a>  
                            </div>
                            <div  id="tjenesterEntreprenørTredjeBoks">
                                <img src={logoTransparentSort} id="tjenesterEntreprenørLogo"/>
                            </div>

                        </div>
                    </div>
                </div>

                <div id="prosjekter">
                    <div id="prosjekterTittel"> 
                        <h3>Prosjekter</h3>
                        <hr id="prosjekterTittelUnderstrek"/>
                    </div>

                    <div class="prosjekterShowCards">
                        <div class="card" id="prosjekterShowCard1">
                            <img class="card-img-top" src={defaultImage} alt="Card image cap" />
                            <div class="card-body">
                            <h5 class="card-title">Nordby utvikling</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#/prosjekt/1" class="btn btn-dark btn-sm">Les mer</a>
                            </div>
                        </div>
                        <div class="card" id="prosjekterShowCard2">
                            <img class="card-img-top" if="prosjekterShowCardImg" src={defaultImage} alt="Card image cap" />
                            <div class="card-body">
                            <h5 class="card-title">Såstad</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#/prosjekt/2" class="btn btn-dark btn-sm">Les mer</a>
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
                        <div class="ansattCard" id="ansattCard1">
                            <img src={defaultAvatar}/>
                            <h5>Ivar Nilsen</h5>
                            <p>Daglig leder</p>
                        </div>
                        <div class="ansattCard" id="ansattCard2">
                            <img src={defaultAvatar}/>
                            <h5>Merete Monsen</h5>
                            <p>Kontoransvarlig</p>
                        </div>
                        <div class="ansattCard" id="ansattCard3">
                            <img src={defaultAvatar}/>
                            <h5>David Viggo Andersen</h5>
                            <p>Anleggsmaskinfører</p>
                        </div>
                        <div class="ansattCard" id="ansattCard4">
                            <img src={defaultAvatar}/>
                            <h5>Piotrek Baworowski</h5>
                            <p>Papapiotrek</p>
                        </div>
                        <div class="ansattCard" id="ansattCard5">
                            <img src={defaultAvatar}/>
                            <h5>André Johansen</h5>
                            <p>Grunnarbeider</p>
                        </div>
                        <div class="ansattCard" id="ansattCard6">
                            <img src={defaultAvatar}/>
                            <h5>Navn Navnesen</h5>
                            <p>Ansattittel</p>
                        </div>
                        <div class="ansattCard" id="ansattCard6">
                            <img src={defaultAvatar}/>
                            <h5>Navn Navnesen</h5>
                            <p>Ansattittel</p>
                        </div>
                        <div class="ansattCard" id="ansattCard6">
                            <img src={defaultAvatar}/>
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
                            <img src={defaultImage} id="omOssBilde"/>
                        </div>
                        <div id="omOssTekst">                      
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat blandit aliquam etiam erat velit scelerisque in. Arcu non sodales neque sodales. Maecenas accumsan lacus vel facilisis volutpat est. Lobortis feugiat vivamus at augue. Arcu felis bibendum ut tristique et egestas. Vitae suscipit tellus mauris a diam maecenas. Sit amet venenatis urna cursus eget nunc. Nunc aliquet bibendum enim facilisis gravida neque. Felis imperdiet proin fermentum leo vel orci. Ut pharetra sit amet aliquam. Netus et malesuada fames ac turpis egestas. Cursus euismod quis viverra nibh cras pulvinar mattis nunc sed.</p>
                            <a href="#/om" class="btn btn-outline-light btn-sm">Les mer</a>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
    componentDidMount(){
        window.scrollTo(0, 0);
    }
}
export default Entreprenør;