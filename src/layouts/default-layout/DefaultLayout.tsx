import { Footer, NavigationBar } from "../../components";
import "./DefaultLayout.styles.scss";

interface DefaultLayoutProps {
    children: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
    return (
        <main className="default-layout-wrapper">
            <NavigationBar />
            {children}
            <Footer />
        </main>
    );
};

export default DefaultLayout;
