import { Link } from "react-router-dom"
export default function Navbar(){
    return (
        <div id="navbar">
            <Link to="/red">Red</Link>
            <Link to="/blue">Blue</Link>
            <Link to="/home">Home</Link>
        </div>
    )
}