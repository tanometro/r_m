import styles from "./Cards.module.css"
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect} from "react";

export function Card(props) {
   const { id, name, status, species, gender, origin, image, onClose, favorite, addFav, removeFav } = props;
   const [isFav, setFav] = useState(false);

   const handleFavorite = () => {
      if(isFav == true) {
         setFav(false);
         removeFav(id);
      }
      else {
         setFav(true);
         addFav({props});
      }
   }

   useEffect(() => {
      favorite?.forEach((fav) => {
         if (fav.id === props.id) {
            setFav(true);
         }
      });
   }, [favorite]);
   
   return (
   <>
      <div className={styles.container}>
      {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
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

function mapStateToProps(state) {
   return {
      favorite: state.myFavorite,
   }
}

function mapDispatchToProps(dispatch) {
   return {
      addFav: (personaje) => dispatch(addFav(personaje)),
      removeFav: (id) => dispatch(removeFav(id)),
   }

}

export default connect(mapStateToProps, mapDispatchToProps)(Card);