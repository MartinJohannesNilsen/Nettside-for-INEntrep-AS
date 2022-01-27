import React, { useEffect } from "react";
import $ from "jquery";
import "../Styles/Entreprenør.scss";
import Navbar from "../Components/Navbar";
import Carousel from "../Components/Carousel";
import Footer from "../Components/Footer";
import logoTransparentSort from "../Assets/Logos/IN-Logo-sort.png";
import logoTransparentHvit from "../Assets/Logos/IN-Logo-hvit.png";
import jubileumsikon from "../Assets/Icons/Jubileumsikon.svg";
import firmanavn from "../Assets/Logos/Firmanavn.png";
import projects from "../Data/ProjectData";
const defaultAvatar =
	"https://firebasestorage.googleapis.com/v0/b/ivarnilsenentreprenoras.appspot.com/o/Default%2FDefaultAvatar2.jpg?alt=media&token=182fc213-f6ce-4c48-b664-48035eed1a88";

const Entreprenør = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div>
			<Navbar />
			<div id="EntreprenørContainer">
				<div>
					<Carousel />
				</div>

				<div className="introText">
					<img
						id="introTextImg"
						src={firmanavn}
						alt="Ivar Nilsen Entreprenør AS"
					/>
				</div>

				<div id="jubileum">
					<div id="jubileumsContainer">
						<div id="jubileumsBildeContainer">
							<img
								src={jubileumsikon}
								id="jubileumsBilde"
								alt="Illustrerende bilde av firmaet"
							/>
						</div>
						<div id="jubileumsTekst">
							<h5>
								Ivar Nilsen Entreprenør AS fyller 25 år i år! Vi ønsker å takke
								alle våre kunder og samarbeidspartnere opp gjennom årene, og ser
								frem til videre samarbeid.
							</h5>
						</div>
					</div>
				</div>

				<div id="tjenesterEntreprenør">
					<div className="card" id="tjenesteboks">
						<div className="card-body" id="tjenesterEntreprenørContainer">
							<div id="tjenesterEntreprenørFørsteBoks">
								<h5> Hvem er vi? </h5>
								<p>
									Vi er et mindre entreprenørselskap som utfører alt av grunn-
									og terrengarbeider på Østlandet. Selskapet har kontorer i
									Årvollskogen 42 og lager på Dillingtoppen 19, Moss. Våre
									ansatte består av dyktige håndverkere. Firmaet har fokus på å
									levere kvalitet og kan vise til gode referanser.
								</p>
								<button
									type="button"
									className="btn btn-outline-dark btn-sm"
									id="tjenesterEntreprenørEntreprenørButton"
									onClick={() => {
										$("html, body").animate(
											{ scrollTop: $("#omOss").offset().top + 1 },
											2000
										);
									}}
								>
									Les mer
								</button>
							</div>
							<div id="tjenesterEntreprenørAndreBoks">
								<h5> Hvilke tjenester utfører vi? </h5>
								<p>
									{" "}
									Vi opererer for det meste på Østlandet, og utfører arbeid
									innen:{" "}
								</p>
								<ul class="list">
									<li>Graving</li>
									<li>Riving</li>
									<li>Drenering</li>
									<li>Asfaltering</li>
									<li>Grøntanlegg</li>
									<li>Salg/transport av matjord, bark og fyllmasse</li>
								</ul>
								<a href="/tjenester">
									<button
										type="button"
										className="btn btn-outline-dark btn-sm"
										id="tjenesterEntreprenørEntreprenørButton"
									>
										Les mer
									</button>
								</a>
							</div>
							<div id="tjenesterEntreprenørTredjeBoks">
								<img
									src={logoTransparentSort}
									id="tjenesterEntreprenørLogo"
									alt="Logo for Ivar Nilsen Entreprenør AS"
								/>
							</div>
						</div>
					</div>
				</div>

				<div id="prosjekter">
					<div id="prosjekterTittel">
						<h3>Større prosjekter</h3>
						<hr id="prosjekterTittelUnderstrek" />
					</div>

					<div className="prosjekterShowCards">
						{projects.map((project, index) => (
							<div
								className="card"
								id={"prosjekterShowCard" + (index + 1)}
								key={project.alt}
							>
								<img
									className="card-img-top"
									id="prosjekterShowCardImg"
									src={project.url}
									alt={project.alt}
								/>
								<div className="card-body">
									<h5 className="card-title">{project.title}</h5>
									<p className="card-text">{project.description}</p>
									{/* <a href="/prosjekt/1" className="btn btn-dark btn-sm">Les mer</a> */}
								</div>
							</div>
						))}
					</div>
				</div>

				<div id="ansatte">
					<div id="ansatteTittel">
						<h3>Ansatte</h3>
						<hr id="ansatteTittelUnderstrek" />
					</div>
					<div id="ansatteCards">
						<div className="ansattCard" id="ansattCard1">
							<img src={defaultAvatar} alt="Portrett av ansatt" />
							<h5>Ivar Nilsen</h5>
							<p>Daglig leder</p>
						</div>
						<div className="ansattCard" id="ansattCard6">
							<img src={defaultAvatar} alt="Portrett av ansatt" />
							<h5>Geir Viken</h5>
							<p>Prosjektleder</p>
						</div>
						<div className="ansattCard" id="ansattCard2">
							<img src={defaultAvatar} alt="Portrett av ansatt" />
							<h5>Merete Monsen</h5>
							<p>Kontoransvarlig</p>
						</div>
						<div className="ansattCard" id="ansattCard3">
							<img src={defaultAvatar} alt="Portrett av ansatt" />
							<h5>David V. Andersen</h5>
							<p>Anleggsmaskinfører</p>
						</div>
						<div className="ansattCard" id="ansattCard6">
							<img src={defaultAvatar} alt="Portrett av ansatt" />
							<h5>Runar Star</h5>
							<p>Lastebilsjåfør</p>
						</div>
						<div className="ansattCard" id="ansattCard6">
							<img src={defaultAvatar} alt="Portrett av ansatt" />
							<h5>Fredrik Falkenberg</h5>
							<p>Lastebilsjåfør</p>
						</div>
						<div className="ansattCard" id="ansattCard5">
							<img src={defaultAvatar} alt="Portrett av ansatt" />
							<h5>André Johansen</h5>
							<p>Rørlegger/Grunnarbeider</p>
						</div>
						<div className="ansattCard" id="ansattCard4">
							<img src={defaultAvatar} alt="Portrett av ansatt" />
							<h5>Piotr Baworowski</h5>
							<p>Grunnarbeider</p>
						</div>
					</div>
				</div>

				<div id="omOss">
					<div id="omOssTittel">
						<h3>Kort om oss</h3>
						<hr id="omOssTittelUnderstrek" />
					</div>
					<div id="omOssContainer">
						<div>
							<img
								src={logoTransparentHvit}
								id="omOssBilde"
								alt="Illustrerende bilde av firmaet"
							/>
						</div>
						<div id="omOssTekst">
							<h5>
								Ivar Nilsen Entreprenør AS ble etablert av Ivar Nilsen en vårdag
								i 1996. Vi er et mindre entreprenørfirma som holder til i Moss.
								Litt forhistorie følger. Ivar er sønn av Sverre Johannes Nilsen
								som startet sin entreprenørforretning i 1957 på Løkenholtet i
								Råde. Dette firmaet ble senere til Råde Graveservice AS. Etter
								hvert ble firmaet overtatt av Sverres barn og Ivar er således så
								godt som født og oppvokst i bransjen. Han gikk ut av eiersiden i
								Råde Graveservice i 2004 og er i dag daglig leder i Ivar Nilsen
								Entreprenør AS.
							</h5>
							{/* <a href="/om" className="btn btn-outline-light btn-sm">Les mer</a> */}
						</div>
					</div>
				</div>

				<Footer />
			</div>
		</div>
	);
};
export default Entreprenør;
