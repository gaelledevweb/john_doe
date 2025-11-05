import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Fresh from "../images/fresh-food.jpg";
import Akira from "../images/restaurant-japonais.jpg";
import EspaceBienEtre from "../images/espace-bien-etre.jpg";
import Seo from "../images/seo.jpg";
import Coder from "../images/coder.jpg";
import Maquette from "../images/screens.jpg";
import "../styles/Card.css";

function BasicExample() {
    return (
        <main>
            <section className='cards-container-first'>
                <Card className='card'>
                    <Card.Img className="card-image" variant="top" src={Fresh} />
                    <Card.Body>
                        <Card.Title className='card-title'>Fresh Food</Card.Title>
                        <Card.Text className='card-content'>
                            site de vente de produits frais en ligne
                        </Card.Text>
                        <Button className="card-btn" variant="primary">Voir le site</Button>
                    </Card.Body>
                    <Card.Footer className="card-footer">Site réalisé avec avec PHP et MySQL</Card.Footer>
                </Card>

                <Card className='card'>
                    <Card.Img className="card-image" variant="top" src={Akira} />
                    <Card.Body>
                        <Card.Title className='card-title'>Restaurant Akira</Card.Title>
                        <Card.Text className='card-content'>
                            Site de vente de produits frais en ligne
                        </Card.Text>
                        <Button className="card-btn" variant="primary">Voir le site</Button>
                    </Card.Body>
                    <Card.Footer className="card-footer">Site réalisé avec WordPress</Card.Footer>
                </Card>

                <Card className='card'>
                    <Card.Img className="card-image" variant="top" src={EspaceBienEtre} />
                    <Card.Body>
                        <Card.Title className='card-title'>Espace bien-être</Card.Title>
                        <Card.Text className='card-content'>
                            Site de vente de produits frais en ligne
                        </Card.Text>
                        <Button className="card-btn" variant="primary">Voir le site</Button>
                    </Card.Body>
                    <Card.Footer className="card-footer">Site réalisé avec LAVAREL</Card.Footer>
                </Card>
            </section>
            <section className='cards-container-second'>
                <Card className='card'>
                    <Card.Img className="card-image" variant="top" src={Seo} />
                    <Card.Body>
                        <Card.Title className='card-title'>SEO</Card.Title>
                        <Card.Text className='card-content'>
                            Amélioration du référencement d'un site
                        </Card.Text>
                        <Button className="card-btn" variant="primary">Voir le site</Button>
                    </Card.Body>
                    <Card.Footer className="card-footer">Utilisation des outils SEO</Card.Footer>
                </Card>

                <Card className='card'>
                    <Card.Img className="card-image" variant="top" src={Coder} />
                    <Card.Body>
                        <Card.Title className='card-title'>Création d'une API</Card.Title>
                        <Card.Text className='card-content'>
                            Création d'une API RESTFULL publique
                        </Card.Text>
                        <Button className="card-btn" variant="primary">Voir le site</Button>
                    </Card.Body>
                    <Card.Footer className="card-footer">PHP - SYMFONY</Card.Footer>
                </Card>

                <Card className='card'>
                    <Card.Img className="card-image" variant="top" src={Maquette} />
                    <Card.Body>
                        <Card.Title className='card-title'>Maquette d'un site web</Card.Title>
                        <Card.Text className='card-content'>
                            Création du prototype d'un site
                        </Card.Text>
                        <Button className="card-btn" variant="primary">Voir le site</Button>
                    </Card.Body>
                    <Card.Footer className="card-footer">Réalisé avec FIGMA</Card.Footer>
                </Card>
            </section>
        </main>
    );
}

export default BasicExample;