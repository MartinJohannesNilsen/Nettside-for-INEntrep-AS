import React from "react";
import "../Styles/Tjenester.scss";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import logoTransparent from "../Assets/Logos/IN-Logo-sort.png";
import serviceList from "../Data/ServiceData.js";
import PhotoGallery from "../Components/PhotoGallery";

const Tjenester = () => {
	const [serviceIndex, setService] = React.useState(0);

	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const onChange = (e) => {
		setService(e.target.value);
	};

	return (
		<div>
			<Navbar />
			<div id="tjenesterContainer">
				<div id="tjenesterTittel">
					<h3>Hva vi utfører</h3>
					<hr id="tjenesterUnderstrek" />
				</div>
				<div id="tjenesterInfo">
					<p id="tjenesterTekst">
						Her kan du lese om de tjenestene vi tilbyr. I løpet av de siste
						{new Date().getFullYear() - 1996} årene har vi utført et godt stykke
						arbeid rundt om på Østlandet. På denne siden ønsker vi å forklare
						litt hva det er vi gjør, og vise noen referansebilder av tidligere
						prosjekter.
					</p>
					<form>
						<div className="form-group">
							<select
								className="form-control"
								onChange={onChange}
								defaultValue="-1"
							>
								{serviceList.map((service, index) => (
									<option value={index} key={service.title}>
										{service.title}
									</option>
								))}
							</select>
						</div>
					</form>
					<div id="tjenesterAvsnitt">
						<h5>{serviceList[serviceIndex].title}</h5>
						<hr id="tjenesterHr" />
						<p id="tjenesterTekst">{serviceList[serviceIndex].text}</p>
						<PhotoGallery
							index={serviceIndex}
							key={serviceIndex}
						></PhotoGallery>
					</div>
					<img src={logoTransparent} id="tjenesterBilde" alt="Firmalogo" />
				</div>
			</div>
			<Footer />
		</div>
	);
};
export default Tjenester;
