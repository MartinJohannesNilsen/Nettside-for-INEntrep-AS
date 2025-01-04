import React, { useState, useCallback, useRef } from "react";
//import Carousel, { Modal, ModalGateway } from "react-images";
import serviceList from "../Data/ServiceData";
import { Gallery, Item } from 'react-photoswipe-gallery'
import 'photoswipe/dist/photoswipe.css'


const PhotoGallery = props => {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
    const photos = serviceList.map(x => x.images)[props.index]
    const refs = useRef([]);

    const openLightbox = useCallback((index) => {
      setCurrentImage(index);
      setViewerIsOpen(true);
      refs.current[index].click();
    }, []);
  
    const closeLightbox = () => {
      setCurrentImage(0);
      setViewerIsOpen(false);
    };

    return (
        <>
        {/* <Gallery photos={photos} onClick={openLightbox} /> */}
        

        <Gallery>
            {photos.map((photo, index) => (
                <Item
                    key={index}
                    original={photo.src}
                    thumbnail={photo.src}
                    width={photo.width}
                    height={photo.height}
                    caption={photo.text}
                >
                    {({ ref, open }) => (
                        // <img ref={ref} onClick={open} src={photo.src} />
                            <img
                              ref={ref}
                              onClick={() => openLightbox(index)}
                              src={photo.src}
                              alt={photo.alt}
                              style={{ cursor: 'pointer', margin: '5px' }}
                            />
                    )}
                </Item>
            ))}
        </Gallery>
        
        
        {/* <ModalGateway>
            {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
                <Carousel
                currentIndex={currentImage}
                views={photos.map(x => ({
                    ...x,
                    srcset: x.src,
                    caption: x.text
                }))}
                />
            </Modal>
            ) : null}
        </ModalGateway> */}
        </>
    );
}

export default PhotoGallery;
