import React from "react";
import s from "./Header.module.css"
import catImage from "../../assets/images/catImage.png"
import topImage from "../../assets/images/topImage.png"

const Header = (props) => {
    return (
        <div className={s.headerItems}>
            <div className={s.topImage}>
                <img src={topImage} alt=""/>
            </div>
            <div className={s.headerText}>
                <h3>Хочешь узнать какой ты каджит ?</h3>
                <h3> Ответь на вопросы</h3>
            </div>
            <div className={s.catImage}>
                <img src={catImage} alt=""/>
            </div>
            <div className={s.botomImage}>
                <img src={topImage} alt=""/>
            </div>
        </div>
    )
}

export default Header
