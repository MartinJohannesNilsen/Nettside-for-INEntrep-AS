import React from 'react';
import '../Styles/ToTop.css';
import $ from 'jquery';

const ToTop = ()  => {
    return (
        <div id="toTopButton">
            <button type="button" className="btn btn-outline-dark btn-light" onClick={() => {$('html, body').animate({scrollTop: '0'}, 2000);}}>➔</button>
        </div>
    );
}

export default ToTop;