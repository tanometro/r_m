import { useState } from "react";
import validations from "./validation.js";
import styles from "./Form.module.css"

export default function Form (props) {
    const {login} = props;

    const [userData, setUserData] = useState({
        email: "",
        password: "",
    })
    const [errors, setErrors] = useState({
        email: '',
        password: "",
    });


    const handleSubmit = (e) => {
        e.preventDefault();
        login(userData);
    }

    const handleChange = (e) => {
        const property = e.target.name;
        const value = e.target.value;
  
        setUserData({...userData, [property]: value})
        setErrors(validations({...userData, [property] : value}));
  
    }

    return (
        <>
    <div className={styles.loginContainer}>
        <div className={styles.square}>
		<i style={{"--clr":"#00ff0a"}}></i>
		<i style={{"--clr":"#ff0057"}}></i>
		<i style={{"--clr":"#fffd44"}}></i>
		<div className={styles.login}>
        <form onSubmit={handleSubmit} >
        <h2>Login</h2>
        <div className={styles.inputBx}>
            <input
            name="email"
            type="text"
            placeholder="Pon tu mail bro"
            value={userData.email}
            onChange={handleChange}/>
            <p>{errors.email}</p>
        </div>
        <div className={styles.inputBx}>
            <input
            name="password"
            type="text"
            placeholder="Pon tu contraseña bro"
            value={userData.password}
            onChange={handleChange}/>
            <p>{errors.password}</p>
        </div>
            <button className={styles.button}>Submit</button>
        </form>
        </div>
        </div>
    </div>
        </>
    )
}