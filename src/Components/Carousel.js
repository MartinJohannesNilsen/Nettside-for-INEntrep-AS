import React from "react";
import "../Styles/Carousel.scss";
import images from "../Data/CarouselData";

const Carousel = () => {
    return(
        <div>
            <div id="ForsideKarusell" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators" id="bildekarusellStreker">
                    {images.map((image, index) => (
                        <li data-target="#ForsideKarusell" data-slide-to={index} className={index === 0 ? "active" : ""} key={index}></li>
                    ))}
                </ol>
                <div className="carousel-inner">
                    {images.map((image, index) => (
                        <div className={index === 0 ? "carousel-item active" : "carousel-item"}>
                            <img className="d-block w-100" src={image.url} alt={image.alt}/>
                        </div>
                    ))}
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
export default Carousel;
