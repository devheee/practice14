import { Link } from "react-router-dom";
import styled from "styled-components";

const Brand_main = styled.div`
padding: 200px 0;
`

const Brand_tab = styled.ul`
display: flex;
gap: 40px;
margin: 0 0 50px 50%;
transform: translate(-15%, -50%);
`

const LI = styled.li`
font-size:20px;

&:last-child {
    font-weight: 700;
}
`

const IMG = styled.img`
display: block;
width: 1400px;
margin: 0 auto;
`

const Brand02 = () => {
    return (
        <Brand_main>
            <Brand_tab>
                <LI><Link to="/Brand01">Brand Story</Link></LI>
                <LI><Link to="/Brand02">Sustainability</Link></LI>
            </Brand_tab>
            <IMG src={process.env.PUBLIC_URL + '/img/sustain_pc.jpg'} alt="" />
        </Brand_main>
    )
}

export default Brand02;