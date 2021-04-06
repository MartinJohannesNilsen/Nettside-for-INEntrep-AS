import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Entreprenør from './Views/Entreprenør';
// import Eiendom from './Views/Eiendom';
import Tjenester from './Views/Tjenester';
import Kontakt from './Views/Kontakt';
import FeilSide from './Views/FeilSide';

const App = () => {
	return (
		<BrowserRouter class = "website">
            <Switch>
                <Route exact path="/" component={Entreprenør} />
                {/* <Route exact path="/eiendom" component={Eiendom} /> */}
                <Route exact path="/tjenester" component={Tjenester} />
                <Route exact path="/kontakt" component={Kontakt} />
                <Route path="*" component={FeilSide} id={1} />
            </Switch>
		</BrowserRouter>
	);
};

export default App;