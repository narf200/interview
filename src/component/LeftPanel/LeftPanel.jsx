import React from "react";
import s from "./LeftPanel.module.css"
import LeftPanelImage from "../../assets/images/leftPanel.png"

const LeftPanel = () => {
    return (
        <div className={s.leftPanel}>
            <img className={s.firstPanel} src={LeftPanelImage} alt=""/>
            <img src={LeftPanelImage} alt=""/>
        </div>
    )
}

export default LeftPanel