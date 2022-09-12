import React from "react";
import styles from './beat.module.css';
import Carousel from 'react-material-ui-carousel';
import { Button, Paper } from "@material-ui/core";

function Beat(props) {
    var items = [
        {
            name: "Mika #1",
            description: "Artiste",
            src : "../assets/img/1.jpg"
        },
        {
            name: "Noe #2",
            description: "BeatMaker",
            src : "../assets/img/1.jpg"
        },
        {
            name: "Jerry #2",
            description: "BeatMaker",
            src : "../assets/img/1.jpg"
        }
    ]
    return (
        <div className={styles.beat}>
            <h1>Les nouveaux BeatMaker & Artiste</h1>
            <div className={styles.contSlide}>
                <Carousel>
                    {
                        items.map((item, i) => <Item key={i} item={item} />)
                    }
                </Carousel>
            </div>
        </div>
    )
}
function Item(props)
{
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>
            <img src={props.item.src} className={styles.im}></img>

            <Button className="CheckButton">
                Voir profil
            </Button>
        </Paper>
    )
}

export default Beat;