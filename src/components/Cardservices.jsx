import Card from 'react-bootstrap/Card';
import "../styles/Cardservices.css";

function BorderExample() {
    return (
        <div className='card-container'>
            <Card>
                <Card.Body>
                    <div className='card-icon'><i className="bi bi-brush"></i></div>
                    <Card.Title className='card-title-service'>UX Design</Card.Title>
                    <Card.Text className='card-content'>
                        L'UX Design est une discipline qui consite à
                        concevoir des produits (sites web, applications, mobiles,
                        logiciels, objets connectés,etc.) en plaçant l'utilisateur
                        au centre des préoccupations. L'objectif est de rendre
                        l'expérience utilisateur la plus fluide et agréable possible.
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card>
                <Card.Body>
                    <div className='card-icon'><i className="bi bi-code-slash"></i></div>
                    <Card.Title className='card-title-service'>Développement web</Card.Title>
                    <Card.Text className='card-content'>
                        Le développement de sites web consiste à créer des sites internet
                        en utilisant des langages de programmation (HTML, CSS, JavaScript,
                        PHP, etc.) et des frameworks (Bootstrap, React, Angular, etc.).
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card>
                <Card.Body>
                    <div className='card-icon'><i className="bi bi-search"></i></div>
                    <Card.Title className='card-title-service'>Référencement</Card.Title>
                    <Card.Text className='card-content'>
                        Le référencement naturel (SEO) est une technique qui consiste à
                        optimiser un site web pour le faire remonter dans les résultats des
                        moteurs de recherche (Google, Bing, Yahoo, etc.). L'objectif est
                        d'attirer un maximum de visiteurs qualifiés sur le site.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default BorderExample;