import bannerImage from "../images/banner.jpg";
import "../styles/Banner.css";

function Banner() {
    return (
        <div className="banner-container">
            <img src={bannerImage} className="banner-image" alt="bannière portfolio"></img>
        </div>
    );
}

export default Banner;