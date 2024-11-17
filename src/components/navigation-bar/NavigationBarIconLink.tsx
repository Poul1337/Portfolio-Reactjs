import "./NavigationBar.styles.scss";

interface NavigationBarIconLinkProps {
    children: React.ReactNode;
    href: string;
}

const NavigationBarIconLink: React.FC<NavigationBarIconLinkProps> = ({
    children,
    href,
}) => {
    return (
        <a href={href} target="__blank" className="navigation-bar-icon-link">
            {children}
        </a>
    );
};

export default NavigationBarIconLink;
