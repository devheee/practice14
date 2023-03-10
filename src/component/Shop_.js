import { useState } from "react"
// import InfiniteScroll from "react-infinite-scroll-component"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { DATA } from "../data/data";

const ShopMain = styled.div`
padding: 150px 0;
width: 1800px;
margin: 0 auto;
`

const H2 = styled.h2`
font-size: 21px;
font-weight: 500;
margin: 0 0 30px 0;
`

const UL = styled.ul`
display: grid;
grid-template-columns: repeat(4, 1fr);
gap: 30px;
`

const LI = styled.li`
`
const P = styled.p`
margin: 10px 0 0 0;
line-height: 19px;
font-size: 14px;
`
const IMGW = styled.div`
overflow: hidden;
`
const IMG = styled.img`
&:hover {
transform: scale(1.2);
    transition: .5s;
    
}
`
const Shop_ = ({ DATA }) => {
    return (

        <ShopMain>
            <H2>ALL</H2>
            {/* <InfiniteScroll
                dataLength={DATA.length} //This is important field to render the next data
                next={DATA}
                hasMore={true}
                loader={<h4>Loading...</h4>}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
            > */}
            <UL>
                {
                    DATA.map(it => {
                        return (
                            <Link to='#!'>
                                <LI>
                                    <IMGW>
                                        <IMG src={`${process.env.PUBLIC_URL}${it.img}`} alt="" />
                                    </IMGW>
                                    <P>{it.product_ko}<br />{it.product_en}<br />{it.price}
                                    </P>
                                </LI>
                            </Link>
                        )
                    })
                }
            </UL>
            {/* </InfiniteScroll> */}
        </ShopMain>

    )
}

export default Shop_

