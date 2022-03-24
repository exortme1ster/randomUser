import React from "react";

import  Header  from './components/Header';
import  Middle  from './components/Middle';
import  Footer  from './components/Footer';

import { CssBaseline } from "@mui/material";


const App = () => {

    return (
        <> 
            <CssBaseline />
            <Header />
            <main>
                <Middle />
            </main>
            <Footer />
        </>
    )
}
 
export default App;