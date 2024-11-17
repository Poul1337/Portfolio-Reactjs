import Logo from "../../assets/Logo";
import "./NavigationBar.styles.scss";
import NavigationBarIcons from "./NavigationBarIcons";

const NavigationBar = () => {
    const navigationItems = [
        "Strona główna",
        "O mnie",
        "Tech Stack",
        "Kontakt",
    ];

    return (
        <nav className="navigation-bar-wrapper">
            <Logo />
            <div className="navigation-bar-buttons-wrapper">
                <ul className="navigation-bar-ul">
                    {navigationItems.map((item, index) => (
                        <li className="navigation-bar-li" key={index}>
                            {item}
                        </li>
                    ))}
                </ul>
                <NavigationBarIcons />
            </div>
        </nav>
    );
};

export default NavigationBar;
