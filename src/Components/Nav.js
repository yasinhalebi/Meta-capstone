import "./Nav.css";
export default function Nav(){
    return <nav>
        <ul>
            <li><a href="Home.js">Home</a></li>
            <li><a href="About.js">About</a></li>
            <li><a href="Menu.js">Menu</a></li>
            <li><a href="Reservations.js" className='active'>Reservations</a></li>
            <li><a href="Order.js">Order Online</a></li>
            <li><a href="Login.js">Login</a></li>
        </ul>
    </nav>
}