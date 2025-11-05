import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Cardservices from "../components/Cardservices";

const Services = () => {
    return (
        <div>
            <header>
                <NavBar />
                <Banner />
                <div className="main-header">
                    <h1>Mon offre de services</h1>
                    <p>Voici les prestations sur lesquelles je peux intervenir
                    </p>
                    <hr />
                </div>
            </header>
            <main>
                <Cardservices />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default Services;