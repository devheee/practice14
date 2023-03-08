import { Link, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import Brand from "./Brand_01";

const Scroll = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
        //console.log(pathname);
    }, [pathname]);

    return null;
}

const Header = () => {
    const [on, setOn] = useState(false);

    const TopBanner = styled.div`
    height: 30px;
    background: #111;
    text-align: center;
    color: #f9f9f9;
    line-height: 30px;
    font-size: 13px;


    &.on {
    line-height: 0;
    height: 0;
    transition: 0.5s;
    }

    .icon {
    position: absolute;
    inset: 5px 10px auto auto;
    color: #fff;
    font-size: 22px;
}
`

    return (
        <header>
            <TopBanner className={on ? 'on' : ''}>
                <p>클럽클리오 리뉴얼 오픈 혜택!</p>
                <FiX className="icon" onClick={() => setOn(true)} />
            </TopBanner>
            <div className="inner">
                <nav className="nav01">
                    <ul>
                        <li><Link to="/Brand01"><span>Brand</span></Link> </li>
                        <li><Link to="/Shop01"><span>Shop</span></Link></li>
                        <li><Link to="/03" className="blue"><span>Global Store</span></Link></li>

                    </ul>
                </nav>
                <h1><a href="./"><img src={process.env.PUBLIC_URL + '/img/logo.jpg'} alt="" /></a></h1>
                <nav className="nav02">
                    <ul>
                        <li><Link to="/01"><span>Join Us</span></Link></li>
                        <li><Link to="/02"><span>Community</span></Link></li>
                        <li><Link to="/03"><FiSearch /></Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;