import React, {useEffect} from "react";
import "../Styles/Eiendom.css";
import defaultImage from '../IMG/default/defaultImage.png'
import dillingtoppen from '../IMG/Eiendom/dillingtoppen.jpg'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'


const Eiendomside = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return(
        <div>
            <Navbar />
            <div id="eiendomContainer">
                <div id="eiendomTabsContainer">
                    <ul class="nav nav-pills" id="pills-tab" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" id="pills-Eiendom1-tab" data-toggle="pill" href="#pills-Eiendom1" role="tab" aria-controls="pills-Eiendom1" aria-selected="true">Om firmaet</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="pills-Eiendom2-tab" data-toggle="pill" href="#pills-Eiendom2" role="tab" aria-controls="pills-Eiendom2" aria-selected="false">Øisteinsgate 8</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="pills-Eiendom3-tab" data-toggle="pill" href="#pills-Eiendom3" role="tab" aria-controls="pills-Eiendom3" aria-selected="false">Dillingtoppen 19</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="pills-Eiendom4-tab" data-toggle="pill" href="#pills-Eiendom4" role="tab" aria-controls="pills-Eiendom4" aria-selected="false">Nordby utvikling</a>
                        </li>
                    </ul>
                </div>

                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-Eiendom1" role="tabpanel" aria-labelledby="pills-Eiendom1-tab"><Eiendom1 /></div>
                    <div class="tab-pane fade" id="pills-Eiendom2" role="tabpanel" aria-labelledby="pills-Eiendom2-tab"><Eiendom2 /></div>
                    <div class="tab-pane fade" id="pills-Eiendom3" role="tabpanel" aria-labelledby="pills-Eiendom3-tab"><Eiendom3 /></div>
                    <div class="tab-pane fade" id="pills-Eiendom4" role="tabpanel" aria-labelledby="pills-Eiendom4-tab"><Eiendom4 /></div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

const Eiendom1 = () => {
    return(
        <div>
            <img src={defaultImage} id="eiendomBilde" alt="Illustrerende bilde av firmaet"/>
            <div id="eiendomNavnContainer">
                <h1>Ivar Nilsen Eiendom</h1>
                <h5>Om firmaet</h5>
                <hr/>
            </div>
            <div id="eiendomTekstContainer">
                <p> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc congue nisi vitae suscipit tellus mauris a diam. Sed egestas egestas fringilla phasellus faucibus scelerisque. Facilisi cras fermentum odio eu feugiat pretium nibh. Sit amet nisl purus in mollis nunc sed. Elementum eu facilisis sed odio morbi quis commodo odio aenean. Congue nisi vitae suscipit tellus. Vitae turpis massa sed elementum tempus egestas. Nisi est sit amet facilisis. Urna nunc id cursus metus aliquam eleifend mi in. Dui ut ornare lectus sit amet. Egestas sed tempus urna et pharetra. Massa massa ultricies mi quis hendrerit dolor magna eget est. Vel orci porta non pulvinar neque. Faucibus nisl tincidunt eget nullam. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Felis imperdiet proin fermentum leo vel orci. Gravida rutrum quisque non tellus orci. Est ullamcorper eget nulla facilisi.
                </p>
                
            </div>
        </div>
    )
} 

const Eiendom2 = () => {
    return(
        <div>
            <img src={defaultImage} id="eiendomBilde" alt="Illustrerende bilder av Øysteinsgate 8"/>
            <div id="eiendomNavnContainer">
                <h1>Øisteinsgate 8</h1>
                <h5>Leiligheter</h5>
                <hr/>
            </div>
            <div id="eiendomTekstContainer">
                <p> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc congue nisi vitae suscipit tellus mauris a diam. Sed egestas egestas fringilla phasellus faucibus scelerisque. Facilisi cras fermentum odio eu feugiat pretium nibh. Sit amet nisl purus in mollis nunc sed. Elementum eu facilisis sed odio morbi quis commodo odio aenean. Congue nisi vitae suscipit tellus. Vitae turpis massa sed elementum tempus egestas. Nisi est sit amet facilisis. Urna nunc id cursus metus aliquam eleifend mi in. Dui ut ornare lectus sit amet. Egestas sed tempus urna et pharetra. Massa massa ultricies mi quis hendrerit dolor magna eget est. Vel orci porta non pulvinar neque. Faucibus nisl tincidunt eget nullam. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Felis imperdiet proin fermentum leo vel orci. Gravida rutrum quisque non tellus orci. Est ullamcorper eget nulla facilisi.
                </p>
            </div>
        </div>
    )
} 

const Eiendom3 = () => {
    return(
        <div>
            <img src={dillingtoppen} id="eiendomBilde" alt="Illustrerende bilder av Dillingtoppen 19"/>
            <div id="eiendomNavnContainer">
                <h1>Dillingtoppen 19</h1>
                <h5>Tomt</h5>
                <hr/>
            </div>
            <div id="eiendomTekstContainer">
                <p> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc congue nisi vitae suscipit tellus mauris a diam. Sed egestas egestas fringilla phasellus faucibus scelerisque. Facilisi cras fermentum odio eu feugiat pretium nibh. Sit amet nisl purus in mollis nunc sed. Elementum eu facilisis sed odio morbi quis commodo odio aenean. Congue nisi vitae suscipit tellus. Vitae turpis massa sed elementum tempus egestas. Nisi est sit amet facilisis. Urna nunc id cursus metus aliquam eleifend mi in. Dui ut ornare lectus sit amet. Egestas sed tempus urna et pharetra. Massa massa ultricies mi quis hendrerit dolor magna eget est. Vel orci porta non pulvinar neque. Faucibus nisl tincidunt eget nullam. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Felis imperdiet proin fermentum leo vel orci. Gravida rutrum quisque non tellus orci. Est ullamcorper eget nulla facilisi.
                </p>
                
            </div>
        </div>
    )
} 

const Eiendom4 = () => {
    return(
        <div>
            <img src={defaultImage} id="eiendomBilde" alt="Illustrerende bilde av Nordby utvikling"/>
            <div id="eiendomNavnContainer">
                <h1>Nordby utvikling</h1>
                <h5>Fremtidige leiligheter</h5>
                <hr/>
            </div>
            <div id="eiendomTekstContainer">
                <h5>Om prosjektet</h5>
                <p> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc congue nisi vitae suscipit tellus mauris a diam. Sed egestas egestas fringilla phasellus faucibus scelerisque. Est ullamcorper eget nulla facilisi. Facilisi cras fermentum odio eu feugiat pretium nibh. Sit amet nisl purus in mollis nunc sed.
                </p>
                <a href="/prosjekt/1" class="btn btn-outline-dark btn-sm">Les mer</a>
            </div>
        </div>
    )
} 

export default Eiendomside;