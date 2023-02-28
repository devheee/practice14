import { Link } from "react-router-dom";

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
        </>
    )
}


export default Main;