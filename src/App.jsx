import React, { Fragment } from "react";
import { Navbar } from "./components/Navbar";
import { Main } from "./components/Main";

export function App() {
    return (
        <Fragment>
            <Navbar />
            <Main />
        </Fragment>
    );
}