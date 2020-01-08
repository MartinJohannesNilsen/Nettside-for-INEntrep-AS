import React, {Component} from "react";
import "../../css/Prosjekt.css";
import defaultImage from "../../img/default/defaultImage.png";
import nordby from "../../img/prosjekter/nordby.jpg";
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

class Prosjekt extends Component{
    prosjekt = {
        img: [nordby, defaultImage],
        navn: ["Nordby utvikling", "Såstad"],
        innhold: [
            
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer malesuada nunc vel risus commodo viverra. Cursus sit amet dictum sit amet justo donec enim diam. Ut lectus arcu bibendum at. Quisque sagittis purus sit amet volutpat consequat. Lorem sed risus ultricies tristique nulla aliquet enim tortor at. Consectetur purus ut faucibus pulvinar elementum integer enim neque. Lacinia quis vel eros donec ac odio tempor. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar. Tempor id eu nisl nunc mi ipsum.
            Iaculis eu non diam phasellus vestibulum lorem. Sed viverra ipsum nunc aliquet bibendum enim facilisis. Sed turpis tincidunt id aliquet risus. Ornare suspendisse sed nisi lacus sed viverra. Netus et malesuada fames ac turpis. Pulvinar pellentesque habitant morbi tristique senectus et netus. Lectus vestibulum mattis ullamcorper velit sed. Nunc sed augue lacus viverra. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Risus nec feugiat in fermentum posuere urna nec. Mus mauris vitae ultricies leo integer. Cursus euismod quis viverra nibh cras pulvinar mattis nunc. Nulla at volutpat diam ut venenatis tellus in metus vulputate. In cursus turpis massa tincidunt dui. Sit amet nisl suscipit adipiscing bibendum est. Morbi tristique senectus et netus et. Consequat ac felis donec et odio pellentesque. Tristique magna sit amet purus gravida.
            Ultrices dui sapien eget mi proin sed libero enim. Rutrum quisque non tellus orci ac auctor augue mauris augue. Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt. Lobortis elementum nibh tellus molestie nunc. Tellus in metus vulputate eu scelerisque felis imperdiet proin. Pharetra sit amet aliquam id diam maecenas ultricies mi. Purus sit amet volutpat consequat mauris nunc. Tincidunt lobortis feugiat vivamus at. Turpis massa tincidunt dui ut. Aliquet bibendum enim facilisis gravida neque convallis a. Tristique nulla aliquet enim tortor. Enim ut sem viverra aliquet eget. Tellus orci ac auctor augue. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu.
            Urna molestie at elementum eu facilisis sed odio morbi quis. Faucibus purus in massa tempor. Elementum tempus egestas sed sed risus pretium. Cursus metus aliquam eleifend mi. Scelerisque eleifend donec pretium vulputate. Justo laoreet sit amet cursus sit amet dictum sit amet. Sit amet volutpat consequat mauris. Augue interdum velit euismod in. Habitasse platea dictumst vestibulum rhoncus est pellentesque. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed. Convallis aenean et tortor at. Id venenatis a condimentum vitae sapien pellentesque habitant morbi tristique. Bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget. Rhoncus dolor purus non enim praesent elementum facilisis leo. Magnis dis parturient montes nascetur ridiculus mus mauris. Est velit egestas dui id. Eu non diam phasellus vestibulum lorem sed. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas.
            Orci porta non pulvinar neque. Lacinia at quis risus sed vulputate odio ut enim blandit. Ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Congue nisi vitae suscipit tellus mauris. Amet justo donec enim diam. Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae. Laoreet suspendisse interdum consectetur libero. Ipsum a arcu cursus vitae. Pharetra vel turpis nunc eget lorem. Diam quis enim lobortis scelerisque fermentum dui. Dolor sit amet consectetur adipiscing elit ut. Faucibus scelerisque eleifend donec pretium vulputate sapien nec. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Commodo sed egestas egestas fringilla. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum. Pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper. Nisl purus in mollis nunc sed. Netus et malesuada fames ac turpis.`,
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer malesuada nunc vel risus commodo viverra. Cursus sit amet dictum sit amet justo donec enim diam. Ut lectus arcu bibendum at. Quisque sagittis purus sit amet volutpat consequat. Lorem sed risus ultricies tristique nulla aliquet enim tortor at. Consectetur purus ut faucibus pulvinar elementum integer enim neque. Lacinia quis vel eros donec ac odio tempor. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar. Tempor id eu nisl nunc mi ipsum.
            Iaculis eu non diam phasellus vestibulum lorem. Sed viverra ipsum nunc aliquet bibendum enim facilisis. Sed turpis tincidunt id aliquet risus. Ornare suspendisse sed nisi lacus sed viverra. Netus et malesuada fames ac turpis. Pulvinar pellentesque habitant morbi tristique senectus et netus. Lectus vestibulum mattis ullamcorper velit sed. Nunc sed augue lacus viverra. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Risus nec feugiat in fermentum posuere urna nec. Mus mauris vitae ultricies leo integer. Cursus euismod quis viverra nibh cras pulvinar mattis nunc. Nulla at volutpat diam ut venenatis tellus in metus vulputate. In cursus turpis massa tincidunt dui. Sit amet nisl suscipit adipiscing bibendum est. Morbi tristique senectus et netus et. Consequat ac felis donec et odio pellentesque. Tristique magna sit amet purus gravida.
            Ultrices dui sapien eget mi proin sed libero enim. Rutrum quisque non tellus orci ac auctor augue mauris augue. Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt. Lobortis elementum nibh tellus molestie nunc. Tellus in metus vulputate eu scelerisque felis imperdiet proin. Pharetra sit amet aliquam id diam maecenas ultricies mi. Purus sit amet volutpat consequat mauris nunc. Tincidunt lobortis feugiat vivamus at. Turpis massa tincidunt dui ut. Aliquet bibendum enim facilisis gravida neque convallis a. Tristique nulla aliquet enim tortor. Enim ut sem viverra aliquet eget. Tellus orci ac auctor augue. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu.
            Urna molestie at elementum eu facilisis sed odio morbi quis. Faucibus purus in massa tempor. Elementum tempus egestas sed sed risus pretium. Cursus metus aliquam eleifend mi. Scelerisque eleifend donec pretium vulputate. Justo laoreet sit amet cursus sit amet dictum sit amet. Sit amet volutpat consequat mauris. Augue interdum velit euismod in. Habitasse platea dictumst vestibulum rhoncus est pellentesque. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed. Convallis aenean et tortor at. Id venenatis a condimentum vitae sapien pellentesque habitant morbi tristique. Bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget. Rhoncus dolor purus non enim praesent elementum facilisis leo. Magnis dis parturient montes nascetur ridiculus mus mauris. Est velit egestas dui id. Eu non diam phasellus vestibulum lorem sed. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas.
            Orci porta non pulvinar neque. Lacinia at quis risus sed vulputate odio ut enim blandit. Ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Congue nisi vitae suscipit tellus mauris. Amet justo donec enim diam. Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae. Laoreet suspendisse interdum consectetur libero. Ipsum a arcu cursus vitae. Pharetra vel turpis nunc eget lorem. Diam quis enim lobortis scelerisque fermentum dui. Dolor sit amet consectetur adipiscing elit ut. Faucibus scelerisque eleifend donec pretium vulputate sapien nec. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Commodo sed egestas egestas fringilla. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum. Pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper. Nisl purus in mollis nunc sed. Netus et malesuada fames ac turpis.`

        ]
    }
    state = {
        id: this.props.match.params.id
    }
    

    componentDidMount() {
        window.scrollTo(0, 0)
    }
    componentDidUpdate(prevProps) {
        if(this.props.match.params.id !== prevProps.match.params.id){
            this.setState({id: this.props.match.params.id});
        }    
    }

    render(){

        return(
            <div>
                <Navbar />
                <div id="prosjektContainer">
                    <img src={this.prosjekt.img[this.state.id-1]} id="prosjektBilde"/>
                    <div id="prosjektNavnContainer">
                        <h1>{this.prosjekt.navn[this.state.id-1]}</h1>
                        <hr/>
                    </div>
                    <div id="prosjektTekstContainer">
                        {this.prosjekt.innhold[this.state.id-1].split('\n').map(avsnitt => (
                            <p>{avsnitt}</p>
                        ))}
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
export default Prosjekt;