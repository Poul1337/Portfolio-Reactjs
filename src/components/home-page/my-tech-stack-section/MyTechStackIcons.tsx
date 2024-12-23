import StackIcon from "tech-stack-icons";
import "./MyTechStackSection.styles.scss";

const MyTechStackIcons = () => {
    const techStack = [
        "css3",
        "html5",
        "typescript",
        "js",
        "sass",
        "tailwindcss",
        "reactjs",
        "reactquery",
        "git",
        "github",
        "nestjs",
        "postgresql",
        "nextjs",
        "i18next",
        "reactrouter",
        "prisma",
        "vitejs",
        "nodejs",
        "zod",
        "linux",
        "docker",
    ];
    return (
        <div className="my-tech-stack-icons">
            {techStack.map((item, index) => {
                const delay = Math.random() * 3;

                return (
                    <StackIcon
                        key={index}
                        name={item}
                        className="stack-icon"
                        style={{ animationDelay: `${delay}s` }}
                    />
                );
            })}
        </div>
    );
};

export default MyTechStackIcons;
