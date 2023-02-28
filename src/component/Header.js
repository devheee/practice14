import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";


const Header = () => {
    return (
        <header>
            <div className="TopBanner">
                <p>클럽클리오 리뉴얼 오픈 혜택!</p>
            </div>
            <div className="inner">
                <nav className="nav01">
                    <ul>
                        <li><Link to="/01">Brand</Link></li>
                        <li><Link to="/02">Shop</Link></li>
                        <li><Link to="/03" className="blue">Global Store</Link></li>
                    </ul>
                </nav>
                <h1><a href="/"><img src={process.env.PUBLIC_URL + '/img/logo.jpg'} alt="" /></a></h1>
                <nav className="nav02">
                    <ul>
                        <li><Link to="/01">Join Us</Link></li>
                        <li><Link to="/02">Community</Link></li>
                        <li><Link to="/03"><FiSearch /></Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;