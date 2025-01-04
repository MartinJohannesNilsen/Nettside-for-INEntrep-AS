import React from "react";
import { Route, BrowserRouter, Routes } from "react-router";

// Views
import Entreprenør from './Views/Entreprenør';
// import Eiendom from './Views/Eiendom';
import Tjenester from './Views/Tjenester';
import Kontakt from './Views/Kontakt';
import FeilSide from './Views/FeilSide';

const App = () => {
    return (
        <BrowserRouter className="website">
            <Routes>
                <Route path="/" element={<Entreprenør />} />
                {/* <Route path="/eiendom" element={<Eiendom />} /> */}
                <Route path="/tjenester" element={<Tjenester />} />
                <Route path="/kontakt" element={<Kontakt />} />
                <Route path="*" element={<FeilSide />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
