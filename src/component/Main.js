import { Link } from "react-router-dom";
import MainSlide from "./MainSlide";

import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'


const Main = () => {
    return (
        <>
            <section className="Mainimg">
                {/* <Link to="/01"><img src={process.env.PUBLIC_URL + '/img/main01.jpg'} alt="" /></Link> */}
            </section>
            <section className="MainPhrases">
                <h2>Good all, goodal</h2>
                <p>"피부에 전하는 순한 영향력, 우리 모두에게 좋은 것으로"</p>
                <Link><span>Brand story</span></Link>
            </section>
            <section className="MainVideo">
                <iframe src="https://player.vimeo.com/video/749442044?h=8fc3f4fb0f&background=1&autoplay=1&loop=1&title=0&byline=0&portrait=0&controls=0&muted=1" frameborder="">
                </iframe>
            </section>
            <section className="M_Productslide">
                <MainSlide />
            </section>
            <section className="MainBanner">
                <img src={process.env.PUBLIC_URL + '/img/main02.jpg'} alt="" />
                <Link to="./05"><button>Shop now</button></Link>
            </section>
            <section className="Mainproduct">
                <h2>New Products</h2>
                <div className="product">
                    <Link to='/'> <figure>
                        <img src={process.env.PUBLIC_URL + '/img/new01.jpg'} alt="" />
                        <p>살구 콜라겐 탄력 워시오프 마스크<br />
                            Apricot Collagen Youth Firming Wash Off Mask<br />
                            30,000원</p>
                    </figure></Link>
                    <Link to='/'><figure>
                        <img src={process.env.PUBLIC_URL + '/img/new02.jpg'} alt="" />
                        <p>순한 마스크<br />
                            Mild sheet mask<br />
                            11,000원</p>
                    </figure></Link>
                    <Link to='/'><figure>
                        <img src={process.env.PUBLIC_URL + '/img/new03.jpg'} alt="" />
                        <p>살구 콜라겐 탄력 마스크<br />
                            Apricot collagen youth firming ampoule sheet mask<br />
                            3,000원</p>
                    </figure></Link>
                </div>
            </section>

        </>
    )
}


export default Main;