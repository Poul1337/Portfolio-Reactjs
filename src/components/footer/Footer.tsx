import ReactCountryFlag from "react-country-flag";
import Logo from "../../assets/Logo";
import NavigationBarIcons from "../navigation-bar/NavigationBarIcons";
import "./Footer.styles.scss";

const Footer = () => {
    const footerItems = ["Strona główna", "O mnie", "Tech Stack", "Kontakt"];
    const footerFlags = ["PL", "GB"];
    return (
        <footer>
            <div className="footer-up">
                <Logo />
                <div className="footer-info">
                    <div className="footer-flags">
                        {footerFlags.map((item, index) => (
                            <ReactCountryFlag
                                countryCode={item}
                                key={index}
                                style={{
                                    fontSize: 30,
                                }}
                            />
                        ))}
                    </div>
                    <h1>paweljarujaruszewski@gmail.com</h1>
                    <NavigationBarIcons />
                </div>
            </div>
            <div className="footer-divider" />
            <div className="footer-bottom">
                <ul className="footer-list">
                    {footerItems.map((item, index) => (
                        <li className="footer-list-item" key={index}>
                            {item}
                        </li>
                    ))}
                </ul>
                <h2>PawełJaruszewski.pl</h2>
            </div>
        </footer>
    );
};

export default Footer;
