import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "../styles/Modal.css";

function Example() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    useEffect(() => {
        fetch("https://api.github.com/users/github-john-doe")
            .then(res => res.json())
            .then(data => {
            });
    }, []);

    return (
        <div className='mondal-content'>
            <Button className='button-modal' variant="primary" onClick={handleShow}>
                En savoir Plus
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Mon profil GitHub</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Link to="https://github.com/github-john-doe" target="_blank"><i className="bi bi-github" rel="nofollow"></i></Link></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Fermer
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Example;