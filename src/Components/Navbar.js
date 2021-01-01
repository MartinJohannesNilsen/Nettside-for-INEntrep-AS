import React from 'react';
import '../Styles/Navbar.css';
// import logoHvit from "../IMG/logo/logoHvit.jpg"
// import logoSort from "../IMG/logo/logoSort.jpg"
// import logoTransparentSort from "../IMG/logo/logoTransparentSort.png"
import logoTransparentHvit from "../IMG/logo/logoTransparentHvit.png"

const Navbar = () => {
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark" id="navbar">
                <a className="navbar-brand" href="/"><img src={logoTransparentHvit} width="100" height="50" alt="firmalogo"/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" onClick={()=> window.location.href="/Entreprenør"} >Ivar Nilsen Entreprenør AS<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={()=> window.location.href="/Eiendom"} href="/Eiendom">Ivar Nilsen Eiendom AS</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/Prosjekt" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Prosjekter
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown" id="navbarDropdown">
                            <a className="dropdown-item" onClick={()=> window.location.href="/prosjekt/1"} >Nordby utvikling</a>
                            <a className="dropdown-item" onClick={()=> window.location.href="/prosjekt/2"} >Såstad</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={()=> window.location.href="/Kontakt"} >Kontakt oss</a>
                    </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;