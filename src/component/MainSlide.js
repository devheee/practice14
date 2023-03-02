import Slide from "react-slick";
import "slick-carousel/slick/slick.css";
import styled from "styled-components";
import { RxArrowLeft } from "react-icons/rx";
import { RxArrowRight } from "react-icons/rx";
import { useRef, useState } from "react";


const MainVisual = styled.section`
position:relative;
padding: 100px 0;
h2 {
    font-size: 30px;
    font-weight: 500;
    text-align: center;
    margin: 0 0 50px 0;
}


.slick-dots {
    position: absolute;
    left: 50%;


    li {
    display: inline-block;
    margin: 0 10px 0 0;
    }
        button {
            cursor: pointer;
            font-size: 0;
            width: 10px;
            height: 10px;
            background: #ddd;
            border: none;
            border-radius: 50%;
            &::before {
                display: none;
            }
        }
        .slick-active {
            button {
                background: #111;
            }
        }
    }
`



const MainSlide = () => {
    const option = {
        autoplay: true,
        autoplaySpeed: 2500,
        dots: true,
        arrows: false,
        centerMode: true,
        centerPadding: '150px',
        slidesToShow: 3,
        // afterChange: idx => setslideNum(idx),
    }
    return (
        <MainVisual>
            <h2>Best Seller</h2>
            <Slide {...option} className="MainSlide">
                <div className="itm">
                    <img src={process.env.PUBLIC_URL + '/img/product04.jpg'} alt="" />
                    <div className="text">
                        <p>맑은 어성초 진정 마스크<br />
                            Houttuynia cordata calming moisture care sheet mask<br />
                            30,000원</p>
                    </div>
                </div>
                <div className="itm">
                    <img src={process.env.PUBLIC_URL + '/img/product01.jpg'} alt="" />
                    <div className="text">
                        <p>청귤 비타C 잡티 케어 세럼<br />
                            Green tangerine vitaC dark spot care serum<br />
                            28,000원</p>
                    </div>
                </div>
                <div className="itm">
                    <img src={process.env.PUBLIC_URL + '/img/product02.jpg'} alt="" />
                    <div className="text">
                        <p>맑은 어성초 진정 수분 크림<br />
                            Houttuynia cordata calming moisture cream<br />
                            25,000원</p>
                    </div>
                </div>
                <div className="itm">
                    <img src={process.env.PUBLIC_URL + '/img/product03.jpg'} alt="" />
                    <div className="text">
                        <p>맑은 어성초 진정 에센스<br />
                            Houttuynia cordata calming essence<br />
                            24,000원</p>
                    </div>
                </div>
                <div className="itm">
                    <img src={process.env.PUBLIC_URL + '/img/product05.jpg'} alt="" />
                    <div className="text">
                        <p>맑은 어성초 진정 수분 선크림<br />
                            Houttuynia cordata calming sun cream<br />
                            18,000원</p>
                    </div>
                </div>
                <div className="itm">
                    <img src={process.env.PUBLIC_URL + '/img/product06.jpg'} alt="" />
                    <div className="text">
                        <p>맑은 어성초 진정 토너패드<br />
                            Houttuynia cordata calming toner pad<br />
                            24,000원</p>
                    </div>
                </div>
            </Slide>

        </MainVisual>
    )
}

export default MainSlide;