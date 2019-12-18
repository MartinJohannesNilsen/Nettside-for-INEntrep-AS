import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '././css/index.css'
import Navbar from '../src/Components/Navbar/Navbar'
import ToTop from './Components/ToTop/ToTop'
import Footer from './Components/Footer/Footer'

import Entreprenør from '../src/Components/Entreprenør/Entreprenør';
import Eiendom from '../src/Components/Eiendom/Eiendom';
import Om from '../src/Components/Om/Om';
import Prosjekt from '../src/Components/Prosjekter/Prosjekt';
import Tjenester from '../src/Components/Tjenester/Tjenester';
import Kontakt from '../src/Components/Kontakt/Kontakt';

ReactDOM.render(
    <HashRouter>
        <div class = "website">
            <Navbar/>
            <Route exact path="/" component={Entreprenør} />
            <Route exact path="/entreprenør" component={Entreprenør} />
            <Route exact path="/eiendom" component={Eiendom} />
            <Route exact path="/om" component={Om} />
            <Route exact path="/prosjekt/:id" component={Prosjekt} />
            <Route exact path="/tjenester" component={Tjenester} />
            <Route exact path="/kontakt" component={Kontakt} />
            <ToTop />
            <Footer/>
        </div>
    </HashRouter>
    , (document.getElementById('root')));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
