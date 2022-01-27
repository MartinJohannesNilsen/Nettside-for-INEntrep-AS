import React from "react";
import "../Styles/Navbar.scss";
import logoTransparentHvit from "../Assets/Logos/IN-Logo-hvit-2.png";

const Navbar = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-dark" id="navbar">
				<a className="navbar-brand" href="/">
					<img
						src={logoTransparentHvit}
						width="40"
						height="44"
						alt="firmalogo"
					/>
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item">
							<a className="nav-link" href="/">
								Ivar Nilsen Entreprenør AS
								<span className="sr-only">(current)</span>
							</a>
						</li>
						{/* <li className="nav-item">
                        <a className="nav-link" href="/eiendom">Ivar Nilsen Eiendom AS</a>
                    </li> */}
						<li className="nav-item">
							<a className="nav-link" href="/tjenester">
								Hva vi utfører
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/kontakt">
								Kontakt oss
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
