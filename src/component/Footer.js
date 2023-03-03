import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <ul >
                <p>COMPANY</p>
                <li className="f_first">Company : (주)클리오 | CEO : 한현옥</li>
                <li className="f_first">Business License : 2118622189 | Tel : 080-080-1510</li>
                <li className="f_first">Address : 04778 서울특별시 성동구 왕십리로 66 (성수동1가) 클리오</li>
            </ul>
            <ul>
                <p>FOLLOW</p>
                <li class="f_bold"><Link to='https://www.instagram.com/'>Instagram</Link></li>
                <li class="f_bold"><Link to='https://ko-kr.facebook.com/'>Facebook</Link></li>
                <li class="f_bold"><Link to='https://www.youtube.com/'>Youtube</Link></li>
            </ul>
            <ul>
                <p>FAMLIY SITE</p>
                <li class="f_bold"><Link to='https://clubclio.co.kr/'>Club clio</Link></li>
                <li class="f_bold"><Link>English</Link></li>
                <li class="f_bold"><Link>Chinese</Link></li>
                <span>&copy; 2021 goodal</span>
            </ul>
        </footer>
    )
}

export default Footer;