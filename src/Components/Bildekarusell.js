import React from "react";
import "../Styles/Bildekarusell.css";
import Bilde1 from "../IMG/Bildekarusell/Bilde1.jpg"
import Bilde2 from "../IMG/Bildekarusell/Bilde2.jpg"
import Bilde3 from "../IMG/Bildekarusell/Bilde3.jpg"
// import $ from "jquery";

const Bildekarusell = () => {
    return(
        <div>
            <div id="ForsideKarusell" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators" id="bildekarusellStreker">
                    <li data-target="#ForsideKarusell" data-slide-to="0" className="active"></li>
                    <li data-target="#ForsideKarusell" data-slide-to="1"></li>
                    <li data-target="#ForsideKarusell" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img className="d-block w-100" src={Bilde1} alt="Ivar Nilsen med ny henger"/>
                    </div>
                    <div className="carousel-item">
                    <img className="d-block w-100" src={Bilde2} alt="Ivar Nilsen med ny gul bil"/>
                    </div>
                    <div className="carousel-item">
                    <img className="d-block w-100" src={Bilde3} alt="Ivar Nilsen med ny gul bil"/>
                    </div>
                    
                </div>
                <a className="carousel-control-prev" href="#ForsideKarusell" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#ForsideKarusell" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}
export default Bildekarusell;





