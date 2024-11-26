import React from "react";
import {
    Footer,
    NavigationBar,
    NavigationBarMediaQuery,
} from "../../components";
import "./DefaultLayout.styles.scss";
import { FooterMediaQuery } from "../../components/footer";

interface DefaultLayoutProps {
    children: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
    const BREAKPOINT_WIDHT = 1200;

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    React.useEffect(() => {
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return windowWidth >= BREAKPOINT_WIDHT ? (
        <main className="default-layout-wrapper">
            <NavigationBar />
            {children}
            <Footer />
        </main>
    ) : (
        <main className="default-layout-wrapper">
            <NavigationBarMediaQuery />
            {children}
            <FooterMediaQuery />
        </main>
    );
};

export default DefaultLayout;
