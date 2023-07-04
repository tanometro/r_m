import Card from './Card';
import styles from "./Cards.module.css"


export default function Cards(props) {
   const {onClose, characters} = props;
   return (
      <div className={styles.container} >
         {characters.map((character) => (
            <Card key={character.id} {...character} onClose={() => onClose(character.id)} />
         ))}
      </div>
   );
}