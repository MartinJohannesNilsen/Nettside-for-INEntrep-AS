import "../Styles/Carousel.scss";
import { React, useState } from 'react';
// import Carousel from 'react-bootstrap/Carousel';
import images from "../Data/CarouselData";

const ImageCarousel = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return(
        <div></div>

        // <Carousel activeIndex={index} onSelect={handleSelect}>
        //     {images.map((image, index) => (
        //         <Carousel.Item key={index}>
        //             <img className="d-block w-100" src={image.url} alt={image.alt}/>
        //             {/* <Carousel.Caption>
        //                 <h3>{image.title}</h3>
        //                 <p>{image.text}</p>
        //             </Carousel.Caption> */}
        //         </Carousel.Item>
        //     ))}
        // </Carousel>
        
        
        // <div>
        //     <div id="ForsideKarusell" className="carousel slide" data-ride="carousel">
        //         <ol className="carousel-indicators" id="bildekarusellStreker">
        //             {images.map((image, index) => (
        //                 <li data-target="#ForsideKarusell" data-slide-to={index} className={index === 0 ? "active" : ""} key={index}></li>
        //             ))}
        //         </ol>
        //         <div className="carousel-inner">
        //             {images.map((image, index) => (
        //                 <div className={index === 0 ? "carousel-item active" : "carousel-item"}>
        //                     <img className="d-block w-100" src={image.url} alt={image.alt}/>
        //                 </div>
        //             ))}
        //         </div>
        //         <a className="carousel-control-prev" href="#ForsideKarusell" role="button" data-slide="prev">
        //             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        //             <span className="sr-only">Previous</span>
        //         </a>
        //         <a className="carousel-control-next" href="#ForsideKarusell" role="button" data-slide="next">
        //             <span className="carousel-control-next-icon" aria-hidden="true"></span>
        //             <span className="sr-only">Next</span>
        //         </a>
        //     </div>
        // </div>
    )
}
export default ImageCarousel;
