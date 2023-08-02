import { Routes, Route } from "react-router-dom";
import Red from "./Red";
import Blue from "./Blue";
import Home from "./Home";

export default function MainContainer(){
    return (
        <div id="main-section">
            <Routes>
                <Route path='/blue' element={<Blue />}/>
                <Route path='/red' element={<Red />}/>
                <Route path='/home' element={<Home />}></Route>
            </Routes>
        </div>
    )
}