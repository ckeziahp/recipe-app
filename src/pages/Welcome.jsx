import welcomeImage from "../assets/images/welcome-image.png";

export default function welcome() {

    return (
        <div>
            <h3>Savory & Sweet</h3>
            <img src={welcomeImage} alt="welcome Image" />
        </div>
    )
}