import React from "react";
import styles from "./foot.module.css";
import log from "../../assets/img/logoNm.png";


function Foot() {
    return (
        <div className={styles.contfoot}>
            <div className={styles.contfootup}>
                <div className={styles.contfootupone}>
                    <img src={log}></img>
                </div>
                <div className={styles.contfootuptwo}>
                    <h2>Ne manquez pas un instrumental</h2>
                    <p>Vous voulez en savoir plus sur la façon dont MOZIKA peut vous aider à créer une entreprise musicale prospère et à développer votre base de fans ? Entrez votre nom et votre adresse électronique ci-dessous.</p>
                    <form>
                        <input label="Votre nom" />
                        <input label="Votre email" />
                        <button>s'abonner</button>
                    </form>
                </div>

            </div>
            <div className={styles.contfootdown}>
                <table>
                    <thead>
                        <tr>
                            <th>MOZIKA</th>
                            <th>ACHETER</th>
                            <th>VENDRE</th>
                            <th>SUIVRE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Apropos de nous</td>
                            <td>Lorem Ipsum</td>
                            <td>Lorem Ipsum</td>
                            <td>Facebook</td>
                        </tr>
                        <tr>
                            <td>Apropos de nous</td>
                            <td>Lorem Ipsum</td>
                            <td>Lorem Ipsum</td>
                            <td>Instagram</td>
                        </tr>
                        <tr>
                            <td>Apropos de nous</td>
                            <td>Lorem Ipsum</td>
                            <td>Lorem Ipsum</td>
                            <td>Twitter</td>
                        </tr>
                        <tr>
                            <td>Apropos de nous</td>
                            <td>Lorem Ipsum</td>
                            <td>Lorem Ipsum</td>
                            <td>LinkedIn</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Foot;