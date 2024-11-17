import MyTechStackIcons from "./MyTechStackIcons";
import "./MyTechStackSection.styles.scss";

const MyTechStackSection = () => {
    return (
        <section className="my-tech-stack-wrapper">
            <div className="my-tech-stack-description">
                <h1>Mój Tech Stack</h1>
                <h2>Technologie w których pracowałem</h2>
            </div>
            <MyTechStackIcons />
        </section>
    );
};

export default MyTechStackSection;
