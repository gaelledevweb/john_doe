import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Progressbar from "../components/Progressbar";
import Profil from "../images/john-doe-about.jpg"
import "../styles/Home.css";



const Home = () => {

    return (

        <div>
            <header>
                <NavBar />
            </header>
            <main>
                <section className="home1">
                    <Hero />
                </section>
                <section className="home2">
                    <div className="about">
                        <h2>A propos</h2>
                        <hr />
                        <img src={Profil} alt="john doe"></img>
                        <p className="p-about">Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua <br />
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex commodo consequat.</p>
                        <p className="p-about">Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua <br />
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex commodo consequat.</p>
                        <p className="p-about">Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua <br />
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex commodo consequat.</p>
                    </div>
                    <div className="skill">
                        <Progressbar />
                    </div>
                </section>
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Home;