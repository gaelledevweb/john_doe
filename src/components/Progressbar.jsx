import ProgressBar from 'react-bootstrap/ProgressBar';
import "../styles/Progressbar.css";

function ContextualExample() {
    return (
        <div className="progressbar-container">
            <h2>Mes compétences</h2>
            <hr />
            <p>html 90%</p>
            <ProgressBar className='progressbar-bar' variant="danger" now={90} />
            <p>css3 80%</p>
            <ProgressBar className='progressbar-bar' variant="info" now={80} />
            <p>javascript 70%</p>
            <ProgressBar className='progressbar-bar' variant="warning" now={70} />
            <p>PHP 60%</p>
            <ProgressBar className='progressbar-bar' variant="success" now={60} />
            <p>react 50%</p>
            <ProgressBar className='progressbar-bar' variant="primary" now={50} />
        </div>
    );
}

export default ContextualExample;