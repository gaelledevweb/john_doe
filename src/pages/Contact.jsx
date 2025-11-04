import { Link } from "react-router-dom";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import Form from "../components/Form";
import "../styles/Contact.css";

const Contact = () => {
    return (
        <div>
            <header>
                <NavBar />
                <div className="main-header">
                    <h1>Contact</h1>
                    <p>Pour me contacter en vue d'un entretien ou d'une future collaboration,
                        merci de remplir le formulaire de contact.
                    </p>
                    <hr />
                </div>
            </header>
            <main className="contact-container">
                <section className="form">
                    <h2>Formulaire de contact</h2>
                    <hr />
                    <Form />
                </section>
                <section className="address-container">
                    <h2>Mes coordonnées</h2>
                    <hr />
                    <address className="contact-address">
                        <h2>John Doe</h2>
                        <p><i className="bi bi-map"></i> 40 rue Laure Diebold</p>
                        <p><i className="bi bi-geo-alt"></i> 69000 Lyon, France</p>
                        <Link to="tel:+331020304050" className="link-address"><i className="bi bi-phone"></i> 10 20 30 40 50</Link><br />
                        <Link to="mailto:john.doe@gmail.com" className="link-address"><i className="bi bi-envelope-at"></i> John.doe@gmail.com</Link><br/>
                        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1391.313547377918!2d4.798201149332429!3d45.77866312742041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sfr!4v1762270512228!5m2!1sfr!2sfr"
                          referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </address>
                </section>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Contact;