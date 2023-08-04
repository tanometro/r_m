import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./Detail.module.css";

export default function Detail() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  useEffect(() => {
    axios.get(` ${id}`).then(({ data }) => {
      if (data.name) {
        setCharacter(data);
      } else {
        window.alert("No hay personajes con ese ID");
      }
    });
    return setCharacter({});
}, [id])

// const classVar = () => {
//   let resultado;
//   if(character.gender === "male"){
//     resultado = styles.male;
//   }
//   else if(character.gender === "female"){
//     resultado = styles.female;
//   }
//   else {
//     resultado = styles.other;
// }
// return resultado}
;

  return (
    <>
    <div className={styles.detailDiv}>
        <div className={styles.titleDiv}>
        <h1 className={styles.detailTitle}>Bro's details of: <br></br> {character.name}</h1>
        </div>
        <div className={character.gender === 'Male' ? styles.male : character.gender === 'Female' ? styles.female : styles.other}>
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