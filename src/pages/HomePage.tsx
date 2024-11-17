import { AboutSection, MyTechStackSection } from "../components";
import { DefaultLayout } from "../layouts";

const HomePage = () => {
    return (
        <DefaultLayout>
            <AboutSection />
            <MyTechStackSection />
        </DefaultLayout>
    );
};

export default HomePage;
