import SearchBar from "../SearchBar/SearchBar"
import styles from "./Nav.module.css"

export default function Nav (props) {
    const {buscar} = props;
    return (
    <nav className={styles.navDiv} >
    <SearchBar buscar={buscar}/>     
    </nav>
    )
}