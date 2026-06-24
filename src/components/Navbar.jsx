import '../App.css'
import { Milestone } from 'lucide-react';
import { CircleUser } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
function Navbar(){
    const navigate = useNavigate();
    return(
        <>
         <div>
            <nav>
<ul className="navbar-items">

        <li><Link to="/">Home</Link></li>
        <li><Link to="/how-it-works">How It Works</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/for-workers">For Workers</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
        <li><Link to="/contact-us">Contact Us</Link></li>
</ul>
<div className="auth-buttons">
    <button className="auth-login" onClick={() => navigate('/login')}>LOGIN <CircleUser /></button>
    <button className="auth-signup" onClick={() => navigate('/signup')}>SIGN UP <Milestone /></button>
    
</div>
            </nav>
        </div>
        </>

    )
}
export default Navbar;