import "../styles/Footer.css";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-column">
                    <h2>John Doe</h2>
                    <address>
                        <p>40 rue Laure Diebold</p>
                        <p>69000 Lyon, France</p>
                        <Link to="tel:+331020304050" className="address-links">10 20 30 40 50</Link><br />
                        <Link to="mailto:john.doe@gmail.com" className="address-links">John.doe@gmail.com</Link>
                    </address>
                    <div className="social-links">
                        <Link to="https://github.com/github-john-doe" target="_blank"><i className="bi bi-github" rel="nofollow"></i></Link>
                        <Link to="https://x.com/_ohndoe" target="_blank"><i className="bi bi-twitter" rel="nofollow"></i></Link>
                        <Link to="https://fr.linkedin.com/company/wearewire?trk=similar-pages_result-card_full-click" target="_blank" rel="nofollow"><i className="bi bi-linkedin"></i></Link>
                    </div>
                </div>
                <div className="footer-column">
                    <h2>Liens utiles</h2>
                    <ul className="footer-items">
                        <li>
                            <Link className="footer-links" to="/">Home</Link>
                        </li>
                        <li>
                            <Link className="footer-links" to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link className="footer-links" to="/portfolio">Portfolio</Link>
                        </li>
                        <li>
                            <Link className="footer-links" to="/services">Services</Link>
                        </li>
                        <li>
                            <Link className="footer-links" to="/mentionslegales">Mentions légales</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h2>Mes dernières réalisations</h2>
                    <ul>
                        <li>
                            <Link className="footer-links" to="/freshfood">Fresh Food</Link>
                        </li>
                        <li>
                            <Link className="footer-links" to="/restaurant-akira">Restaurant Akira</Link>
                        </li>
                        <li>
                            <Link className="footer-links" to="/espace-bien-etre">Espace bien-être</Link>
                        </li>
                        <li>
                            <Link className="footer-links" to="/seo">SEO</Link>
                        </li>
                        <li>
                            <Link className="footer-links" to="/creation-d-un-api">Création d'une API</Link>
                        </li>
                        <li>
                            <Link className="footer-links" to="/maquette-d-un-site">Maquette d'un site</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;