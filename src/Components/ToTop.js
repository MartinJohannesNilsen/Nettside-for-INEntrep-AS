import React from 'react';
import '../Styles/ToTop.scss';

const ToTop = ({ topRef }) => {
    return (
        <div id="toTopButton">
            <button type="button" className="btn btn-outline-dark btn-light" onClick={() => topRef.current.scrollIntoView({ behavior: 'smooth' })}>➔</button>
        </div>
    );
}

export default ToTop;