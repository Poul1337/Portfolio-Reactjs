import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import NavigationBarIconLink from "./NavigationBarIconLink";
import "./NavigationBar.styles.scss";

const NavigationBarIcons = () => {
    const githubLink = "https://github.com/Poul1337";
    const linkedinLink =
        "https://www.linkedin.com/in/pawe%C5%82-jaruszewski-25949425b/";

    return (
        <div className="navigation-bar-icons-wrapper">
            <NavigationBarIconLink href={githubLink}>
                <FaGithub size={28} color="#666666" />
            </NavigationBarIconLink>
            <NavigationBarIconLink href={linkedinLink}>
                <FaLinkedin size={28} color="#666666" />
            </NavigationBarIconLink>
        </div>
    );
};

export default NavigationBarIcons;
