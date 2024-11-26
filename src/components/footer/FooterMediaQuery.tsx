import ReactCountryFlag from "react-country-flag";
import NavigationBarIcons from "../navigation-bar/NavigationBarIcons";
import "./Footer.styles.scss";

const FooterMediaQuery = () => {
    const footerFlags = ["PL", "GB"];
    return (
        <footer>
            <div className="footer-up">
                <div className="footer-info">
                    <h1>paweljarujaruszewski@gmail.com</h1>
                    <NavigationBarIcons />
                </div>
            </div>
            <div className="footer-divider" />
            <div className="footer-bottom">
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
                <h2>PawełJaruszewski.pl</h2>
            </div>
        </footer>
    );
};

export default FooterMediaQuery;
