import React from "react";
import Logo from "../../assets/Logo";
import "./NavigationBar.styles.scss";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import BurgerMenu from "./BurgerMenu";

const NavigationBarMediaQuery = () => {
    const [isBurgerMenuOpen, setBurgerMenuOpen] =
        React.useState<boolean>(false);

    const HandleBurgerMenu = () => {
        setBurgerMenuOpen((prev) => !prev);
    };

    

    return (
        <nav className="navigation-bar-wrapper">
            <Logo />
            <HiMiniBars3BottomRight
                size={40}
                style={{ cursor: "pointer" }}
                color="#13b0f5"
                onClick={HandleBurgerMenu}
            />
            {isBurgerMenuOpen && <BurgerMenu />}
        </nav>
    );
};

export default NavigationBarMediaQuery;
