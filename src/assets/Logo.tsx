import "../components/navigation-bar/NavigationBar.styles.scss";

const Logo = () => {
    return (
        <svg
            className="logo"
            width="65"
            height="65"
            viewBox="0 0 135 131"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect x="81" y="27" width="27" height="85.5" fill="#8759F2" />
            <rect
                width="27"
                height="27"
                transform="matrix(1 0 0 -1 108 54)"
                fill="#FFC300"
            />
            <rect width="27" height="83.25" fill="#FF3E80" />
            <rect
                width="27"
                height="27"
                transform="matrix(1 0 0 -1 54 27)"
                fill="#8759F2"
            />
            <rect
                width="27"
                height="27"
                transform="matrix(1 0 0 -1 54 83.25)"
                fill="#8759F2"
            />
            <rect x="27" y="45" width="27" height="85.5" fill="#8759F2" />
        </svg>
    );
};

export default Logo;
