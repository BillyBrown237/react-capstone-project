import Navigation from "./Navigation";
import {useState} from "react";
import Hamburger from "../../assets/hamburger.png";
import Close from "../../assets/close.png";

const Navbar = () => {
    const [isOpen,setIsOpen] = useState(false)

    function handleToggle() {
        setIsOpen(!isOpen)
    }
    return (
        <nav>
            <nav className="burger">
                <img
                    src={require("../../assets/nav-logo.png")}
                    alt="Little Lemon logo"
                    className="nav-image"
                ></img>

                <button className="burger-icon" onClick={handleToggle}>
                    <img src={isOpen ? Close : Hamburger} alt="Navigation Bar" />
                </button>
            </nav>
            <Navigation device="desktop" />
            {isOpen ? <Navigation device="mobile" /> : ""}
        </nav>
    )
}
export default Navbar
