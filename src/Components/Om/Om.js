import React, {Component} from "react";
import "../../css/Om.css";
import defaultImage from "../../img/default/defaultImage.png";

class Om extends Component{
    render(){
        return(
            <div id="omContainer">
                <img src={defaultImage} id="omBilde"/>
                <div id="omNavnContainer">
                    <h1>Ivar Nilsen Entreprenør</h1>
                    <h5>Historien bak firmaet</h5>
                    <hr/>
                </div>
                <div id="omTekstContainer">
                    <p> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc congue nisi vitae suscipit tellus mauris a diam. Sed egestas egestas fringilla phasellus faucibus scelerisque. Facilisi cras fermentum odio eu feugiat pretium nibh. Sit amet nisl purus in mollis nunc sed. Elementum eu facilisis sed odio morbi quis commodo odio aenean. Congue nisi vitae suscipit tellus. Vitae turpis massa sed elementum tempus egestas. Nisi est sit amet facilisis. Urna nunc id cursus metus aliquam eleifend mi in. Dui ut ornare lectus sit amet. Egestas sed tempus urna et pharetra. Massa massa ultricies mi quis hendrerit dolor magna eget est. Vel orci porta non pulvinar neque. Faucibus nisl tincidunt eget nullam. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Felis imperdiet proin fermentum leo vel orci. Gravida rutrum quisque non tellus orci. Est ullamcorper eget nulla facilisi.
                        Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Aliquet nec ullamcorper sit amet risus nullam. Sed elementum tempus egestas sed sed risus pretium quam vulputate. Sapien pellentesque habitant morbi tristique senectus et netus. Semper quis lectus nulla at. Cursus risus at ultrices mi tempus imperdiet nulla malesuada. Fusce ut placerat orci nulla pellentesque dignissim enim sit. Imperdiet sed euismod nisi porta lorem mollis aliquam ut. Nunc congue nisi vitae suscipit tellus mauris a diam. Nisl rhoncus mattis rhoncus urna neque viverra justo. Volutpat lacus laoreet non curabitur. Amet volutpat consequat mauris nunc congue nisi. Sit amet porttitor eget dolor morbi non arcu risus. Turpis egestas pretium aenean pharetra. Cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Urna nec tincidunt praesent semper feugiat nibh. Augue lacus viverra vitae congue eu consequat. Lectus arcu bibendum at varius vel. Enim sed faucibus turpis in eu.
                    </p>
                </div>
            </div>
        )
    }
    componentDidMount() {
        window.scrollTo(0, 0)
    }
}
export default Om;