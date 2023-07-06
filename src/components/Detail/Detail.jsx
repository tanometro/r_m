import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./Detail.module.css";

export default function Detail() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
        setCharacter(data);
      } else {
        window.alert("No hay personajes con ese ID");
      }
    });
    return setCharacter({});
}, [id])

  return (
    <>
    <div className={styles.detailDiv}>
        <div className={styles.titleDiv}>
        <h1 className={styles.detailTitle}>Bro's details of: <br></br> {character.name}</h1>
        </div>
        <div className={character.gender === 'male' ? styles.male : character.gender === 'female' ? styles.female : styles.other}>
            <div>
            <h2>{character.status}</h2>
            <h2>{character.species}</h2>
            <h2>{character.gender}</h2>
            </div>
            <img src={character.image} alt={character.name} className={styles.detailImg}/>
          </div>
    </div>
    </>
  );
}

//
