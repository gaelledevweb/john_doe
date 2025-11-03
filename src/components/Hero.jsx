import Modal from "../components/Modal";
import "../styles/Hero.css";

function Hero() {


    return (
        <div className="hero">
            <div>
                <h1>Bonjour, je suis John Doe</h1>
                <h2>Développeur web fullstack</h2>
                <button>
                    <Modal />
                </button>

            </div>
        </div>
    );
}

export default Hero;