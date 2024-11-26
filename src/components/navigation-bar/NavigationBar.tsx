import Logo from "../../assets/Logo";
import "./NavigationBar.styles.scss";
import NavigationBarIcons from "./NavigationBarIcons";

const NavigationBar = () => {
    const navigationItems = [
        { name: "Strona główna", href: "" },
        { name: "O mnie", href: "about" },
        { name: "Tech Stack", href: "tech-stack" },
        { name: "Kontakt", href: "" },
    ];

    const handleGoToSection = (href: string) => {
        const element = document.getElementById(href);
        if (element) {
            const offset = -300;
            const elementPosition =
                element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition + offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    return (
        <nav className="navigation-bar-wrapper">
            <Logo />
            <div className="navigation-bar-buttons-wrapper">
                <ul className="navigation-bar-ul">
                    {navigationItems.map((item, index) => (
                        <li
                            className="navigation-bar-li"
                            key={index}
                            onClick={() => handleGoToSection(item.href)}
                        >
                            {item.name}
                        </li>
                    ))}
                </ul>
                <NavigationBarIcons />
            </div>
        </nav>
    );
};

export default NavigationBar;
