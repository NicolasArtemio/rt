import NavBar from "./NavBar"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faBehance } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div>   
                <Link to='https://www.facebook.com/profile.php?id=100010447723135' className="linksEstilo"><FontAwesomeIcon icon={faFacebook}/></Link>
                <Link to='https://www.instagram.com/andreaguinder/' className="linksEstilo mx-4"><FontAwesomeIcon icon={faInstagram}/></Link>
                <Link to='https://www.behance.net/andreaguinder' className="linksEstilo"><FontAwesomeIcon icon={faBehance}/></Link>
            </div>
            <img id="logoNavBar" className="text-center" src="logo-alyssa.png"/>
            <NavBar/>
        </header>
    )
}

export default Header
