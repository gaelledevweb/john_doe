import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';
import "../styles/Accordion.css";

function BasicExample() {
    return (
        <Accordion defaultActiveKey="0" className='accordion-content'>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Editeur du site</Accordion.Header>
                <Accordion.Body>
                    <address className="contact-address">
                        <h2>John Doe</h2>
                        <p className='p-accordion'><i className="bi bi-map"></i> 40 rue Laure Diebold</p>
                        <p className='p-accordion'><i className="bi bi-geo-alt"></i> 69000 Lyon, France</p>
                        <Link to="tel:+331020304050" className="link-address"><i className="bi bi-phone"></i> 10 20 30 40 50</Link><br />
                        <Link to="mailto:john.doe@gmail.com" className="link-address"><i className="bi bi-envelope-at"></i> John.doe@gmail.com</Link><br />

                    </address>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Hébergeur</Accordion.Header>
                <Accordion.Body>
                    <h2>alwaysdata</h2>
                    <p className='p-accordion'>91 rue Faubourg Saint-Honoré, 75008 Paris</p>
                    <Link className='link-alwaysdata' to="https://www.alwaysdata.com/fr/" target="_blank" rel="nofollow"><i className="bi bi-globe"></i> www.alwaysdata.com</Link>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Crédits</Accordion.Header>
                <Accordion.Body>
                    <h2>Crédits</h2>
                    <p className='p-accordion'>Ce site a été réalisé par John Doe, étudiant au <Link to="https://www.centre-europeen-formation.fr/" target="_blank" rel="nofollow">Centre Européen de formation.</Link></p><br />
                    <p className='p-accordion'>Les images utilisées sur ce site sont libres de droits et ont été obtenues sur le site <Link to="https://pixabay.com/fr/" target="_blank" rel="nofollow">Pixabay</Link></p><br />
                    <p className='p-accordion'>La favicon de ce site a été fournie par <Link to="https://www.flaticon.com/fr/" target="_blank" rel="nofollow">John Doe Icons erstellt von Freepik - Flaticon</Link></p>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default BasicExample;