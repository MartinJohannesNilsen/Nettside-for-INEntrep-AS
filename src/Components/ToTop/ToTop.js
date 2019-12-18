import React, {Component} from 'react';
import '../../css/ToTop.css';
import $ from 'jquery';

class ToTop extends Component{
    componentDidMount(){
        $('html, body').animate({
            scrollTop: $(".middle").offset().top
        }, 2000);
    }
    render() {
        return (
            <div id="toTopButton">
                <button type="button" class="btn btn-outline-dark btn-light" onClick={() => {$('html, body').animate({scrollTop: '0'}, 2000);}}>➔</button>
            </div>
        );
    }
    componentDidMount(){
        window.scrollTo(0, 0);
    }
}

export default ToTop;