import "./NavigationBar.styles.scss";

const BurgerMenu = () => {
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
        <ul className="burger-menu">
            {navigationItems.map((item, index) => (
                <li key={index} onClick={() => handleGoToSection(item.href)}>
                    {item.name}
                </li>
            ))}
        </ul>
    );
};

export default BurgerMenu;
