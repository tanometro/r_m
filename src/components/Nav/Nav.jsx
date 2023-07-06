import SearchBar from "../SearchBar/SearchBar"
import styles from "./Nav.module.css"
import { NavLink } from "react-router-dom";

export default function Nav (props) {
    const {buscar} = props;
    return (
    <nav className={styles.navDiv} >
    <NavLink to="/home">
          <img src="https://github.com/tanometro.png" alt="Imagen perfil GitHub Angelo"  className={styles.navImg}></img>      </NavLink>
    <NavLink to="/home">
        <span className={styles.navItem}>HOME</span>
    </NavLink>
    <NavLink to="/about">
        <span className={styles.navItem}>ABOUT ME</span>
    </NavLink>
    <SearchBar buscar={buscar}/>     
    </nav>
    )
}