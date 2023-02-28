import { Link } from "react-router-dom";

const Main = () => {
    return (
        <>
            <section className="Mainimg">
                <Link to="/01"><img src={process.env.PUBLIC_URL + '/img/main01.jpg'} alt="" /></Link>
            </section>
            <section className="MainPhrases">

            </section>
        </>
    )
}


export default Main;