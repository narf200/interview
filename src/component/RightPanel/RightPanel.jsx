import React from "react";
import s from "./RightPanel.module.css"
import RightPanelImage from "../../assets/images/righttPanel.png"

const RightPanel = () => {
    return (
        <div className={s.rightPanel}>
            <img className={s.firstPanel} src={RightPanelImage} alt=""/>
            <img  src={RightPanelImage} alt=""/>
            <img  src={RightPanelImage} alt=""/>
        </div>
    )
}

export default RightPanel