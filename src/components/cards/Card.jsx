import styles from "./Cards.module.css"
import { Link } from "react-router-dom";

export default function Card(props) {
   const { id, name, status, species, gender, origin, image, onClose } = props;

   
   return (
   <>
      <div className={styles.container}>
         <div className={styles.card}>
            <div className={`${styles.textos} ${styles.textos1}`}>
               <div className={styles.content}>
                  <div className={styles.buttonContainer}>
                     <button className={styles.mButton}>
                        -
                     </button>
                     <button className={styles.xButton} onClick={() => onClose()}>
                        X
                     </button>
                  </div>
                  <Link to={`/detail/${id}`} >
                     <h2>Name: {name}</h2>
                  </Link>
                     <h2>Status: {status}</h2>
                     <h2>Species: {species}</h2>
                     <h2>Gender: {gender}</h2>
                     <h2>Origin: {origin.name}</h2>
                     <img className={styles.img} src={image} alt='' />
                  
               </div>
            </div>
               <div className={`${styles.textos} ${styles.textos2}`}>
                  <h2>{id}</h2>
               </div>   
         </div>
      </div>
   </>
   );
}
