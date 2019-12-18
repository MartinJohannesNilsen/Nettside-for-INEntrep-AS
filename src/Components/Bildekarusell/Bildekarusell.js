import React, {Component} from "react";
import "../../css/Bildekarusell.css";
import $ from "jquery";
import Bilde1 from "../../img/Bildekarusell/Bilde1.jpg"
import Bilde2 from "../../img/Bildekarusell/Bilde2.jpg"
import Bilde3 from "../../img/Bildekarusell/Bilde3.jpg"

class Bildekarusell extends Component{
    render(){
        return(
            <div>
                <div id="ForsideKarusell" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators" id="bildekarusellStreker">
                        <li data-target="#ForsideKarusell" data-slide-to="0" class="active"></li>
                        <li data-target="#ForsideKarusell" data-slide-to="1"></li>
                        <li data-target="#ForsideKarusell" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img class="d-block w-100" src={Bilde1} alt="Ivar Nilsen med ny henger"/>
                        </div>
                        <div class="carousel-item">
                        <img class="d-block w-100" src={Bilde2} alt="Ivar Nilsen med ny gul bil"/>
                        </div>
                        <div class="carousel-item">
                        <img class="d-block w-100" src={Bilde3} alt="Ivar Nilsen med ny gul bil"/>
                        </div>
                        
                    </div>
                    <a class="carousel-control-prev" href="#ForsideKarusell" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#ForsideKarusell" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        )
    }
}
export default Bildekarusell;





