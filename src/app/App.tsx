import React from 'react';
import {AppRouter} from "./providers/router";
import {Navbar} from "../widgets/Navbar";

const App = () => {
    return (
        <div>
            <Navbar/>
            <div className="content-page">
                <AppRouter/>
            </div>
        </div>
    );
};

export default App;