import React from 'react';
import react, { useState } from 'react';
import styles from "./Homepage.module.css";

const Home = () => {
    const [value, onChange] = useState(new Date());

    React.useEffect(() => {

        var date = new Date();
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        document.getElementById('date').innerHTML = date.getDate() + "  " + monthNames[date.getMonth()] + "  " + date.getFullYear();
        document.getElementById('time').innerHTML = date.getHours() + " : " + date.getMinutes();
    }, [])

    return (
        <>
            <div className={styles.home}>
                <div className={styles.left}>
                    <p>Bienvenue,</p>
                    <h2 id="date"></h2>
                    <p className={styles.pwidth} id="time"></p>
                </div>
                <div className={styles.contenue}>
                    <h1><span className={styles.color}>Plateforme </span>National pour vendre et acheter<br></br>
                        des oeuvres des BEATMAKER Malagasy</h1>
                    <button className={styles.beatmaker}>BEATMAKER</button>
                    <button className={styles.artist}>ARTISTE</button>

                </div>

            </div>

        </>
    );
}
export default Home;