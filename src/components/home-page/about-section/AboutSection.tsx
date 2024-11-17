import "./AboutSection.styles.scss";

const AboutSection = () => {
    return (
        <section className="about-section-wrapper">
            <h1 className="about-section-description">
                Cześć
                <span className="about-section-waving-hand">👋</span>, <br />{" "}
                mam na imię <span className="about-section-name">Paweł</span> i
                jestem ambitnym FullStack developerem.
            </h1>
            <div className="about-section-profile-photo-wrapper">
                <img
                    alt="This is how I look like"
                    src="/profile_photo.jpg"
                    className="about-section-profile-photo"
                />
            </div>
        </section>
    );
};

export default AboutSection;
