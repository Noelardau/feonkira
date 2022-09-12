import React, { useState } from "react";
import styles from "./pageone.module.css";
import image from "../assets/img/logoNm.png";
import { Box, Button, TextField } from "@material-ui/core";
import axios from "axios";


function Inscription() {
    const [Inputs, setInputs] = useState({});
    const handChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setInputs(values => ({ ...values, [name]: value }));

    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(Inputs);
        axios.post('http://f550-102-68-195-114.ngrok.io/signUpUser', Inputs).then(function (response) {
            console.log(response.data);
        });


    }
    return (
        <div className={styles.continscri}>
            <div className={styles.inscricontenir}>
                <div className={styles.inscricontenirone}>
                    <img src={image} width="100%"></img>
                </div>
                <div className={styles.inscricontenirtwo}>
                    <h1>Inscription chez FEONKIRA</h1>
                    <Box className={styles.inscricontenirb}
                        
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1 },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField fullWidth name="Nom" onChange={handChange} className={styles.ex} style={{ width: "80%" }} label="Nom" variant="outlined" />
                        <TextField name="Prenom" onChange={handChange} className={styles.ex} label="Prenom" variant="outlined" />
                        <TextField name="Pseudo" onChange={handChange} className={styles.ex} label="Pseudo" variant="outlined" />
                        <TextField name="email" onChange={handChange} className={styles.ex} label="email" variant="outlined" />
                        <TextField name="mdp" onChange={handChange} className={styles.ex} label="mot de passe" variant="outlined" />
                        <TextField name="cmdp" onChange={handChange} className={styles.ex} label="confirmation mot de passe" variant="outlined" />
                        <Button onClick={handleSubmit} className={styles.extField} variant="contained">inscrire</Button>
                    </Box>
                </div>
            </div>
        </div>
    )
}
export default Inscription;