import "./Navbar.css";
import Link from "./Link";

function Navbar(){
    const x = 1;
    const img = "vite";
    return (
        <>
        <nav>{}</nav>
        <img style={{ height: "200px" }} src={`/${img}.svg`} alt="" />
        <ul>
           <li>
            <Link></Link>
           </li>
           <li>
            <Link></Link>
           </li>
           <li>
            <Link></Link>
           </li>
           <li>
            <Link></Link>
           </li>
           <li>
            <Link></Link>
           </li>
           
        </ul>
        </>
    )
}

export default Navbar;