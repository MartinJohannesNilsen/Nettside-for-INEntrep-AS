import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import ToTop from './Components/ToTop'

import Entreprenør from '../src/Views/Entreprenør';
import Eiendom from '../src/Views/Eiendom';
import Om from '../src/Views/Om';
import Prosjekt from '../src/Views/Prosjekter';
import Tjenester from '../src/Views/Tjenester';
import Kontakt from '../src/Views/Kontakt';
import FeilSide from '../src/Views/FeilSide';

const App = () => {
	return (
		<BrowserRouter class = "website">
            <Switch>
                <Route exact path="/" component={Entreprenør} />
                <Route exact path="/entreprenør" component={Entreprenør} />
                <Route exact path="/eiendom" component={Eiendom} />
                <Route exact path="/om" component={Om} />
                {/* <Route exact path="/prosjekt/:id" component={Prosjekt} /> */}
                <Route exact path="/tjenester" component={Tjenester} />
                <Route exact path="/kontakt" component={Kontakt} />
                {/* <Route exact path="/404" component={FeilSide} /> */}
                <Route path="*" component={FeilSide} id={1} />
                {/* <Redirect to="/404" /> */}
            </Switch>
            <ToTop />
		</BrowserRouter>
	);
};

export default App;