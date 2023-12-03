import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./MainPage";
import PrintPage from "./PrintPage";
import InputPage from "./InputPage";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} >
                    <Route index element={<div>No page is selected.</div> } />
                    <Route path="one" element={<PrintPage/>} />
                    <Route path="two" element={<InputPage/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;