import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Card from "../components/Card";

const Portfolio = () => {
    return (
        <div>
            <header>
                <NavBar />
                <Banner />
                <div className="main-header">
                    <h1>Portfolio</h1>
                    <p>Voici quelques-unes des mes réalisations.
                    </p>
                    <hr />
                </div>
            </header>
            <main>
                <section>
                    <Card />
                </section>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Portfolio;