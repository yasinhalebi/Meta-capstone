import Nav from "./Nav.js";
import logo from "../icons_assets/Logosvg.svg"
import "./Header.css";
function Header (){
return(
    <header>
        <img src={logo} alt=""></img>
        <Nav/>
    </header>
);
}
export default Header