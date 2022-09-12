import React from "react";
import styles from "./Steppage.module.css";
import image from "../../../src/assets/img/Capture.PNG";
const StepPage = () => {
    return (
        <>
            <div className={styles.cont}>
                <div className={styles.contone}>
                    <h1>
                        Faites votre publicité sur Feonkira afin d'augmenter vos ventes d'instrumentals</h1>
                    <p>Vous trouverez sur ce plateforme toutes les tendances actuelles de beats pour vos projet.</p>
                    <button>PLUS D'INFO . . .</button>
                </div>
                <div className={styles.conttwo}>
                    <img src={image}></img>
                </div>
            </div>
        </>
    )
}

export default StepPage;