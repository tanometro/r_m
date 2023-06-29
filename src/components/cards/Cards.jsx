import Card from './Card';
import {characters} from '../../data';
import styles from "./Cards.module.css"


export default function Cards(props) {
   const {onClose} = props;
   return (
      <div className={styles.container} >
         {characters.map((character) => (
            <Card key={character.id} {...character} onClose={onClose} />
         ))}
      </div>
   );
}
