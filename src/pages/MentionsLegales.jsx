import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import Accordion from "../components/Accordion";

const MentionsLegales = () => {
    return (
        <div>
            <header>
                <NavBar />
                <div className="main-header">
                    <h1>Mentions légales</h1>
                    <hr />
                </div>
            </header>
            <main className="main-mentionslegales">
                <Accordion />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default MentionsLegales;