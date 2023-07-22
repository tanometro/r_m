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
        <form onSubmit={handleSubmit} >
            <label>Mail</label>
            <input
            name="email"
            type="text"
            placeholder="Pon tu mail Bro"
            value={userData.email}
            onChange={handleChange}/>
            <p>{errors.email}</p>
            <label>Password</label>
            <input
            name="password"
            type="text"
            placeholder="Pon tu contraseña Bro"
            value={userData.password}
            onChange={handleChange}/>
            <p>{errors.password}</p>
            <button>Submit</button>
        </form>
    )
}


  
//   let container = document.querySelector(".container");
//   document.addEventListener("keyup", function (e) {
//     let password = document.querySelector("#YourPassword").value;
  
//     let strength = Strength(password);
//     if (strength <= 2) {
//       container.classList.add("weak");
//       container.classList.remove("moderate");
//       container.classList.remove("strong");
//     } else if (strength >= 2 && strength <= 4) {
//       container.classList.remove("weak");
//       container.classList.add("moderate");
//       container.classList.remove("strong");
//     } else {
//       container.classList.remove("weak");
//       container.classList.remove("moderate");
//       container.classList.add("strong");
//     }
//   });
  
//   let password = document.querySelector("#YourPassword");
//   let show = document.querySelector(".show");
//   show.onclick = function () {
//     if (password.type === "password") {
//       password.setAttribute("type", "text");
//       show.classList.add("hide");
//     } else {
//       password.setAttribute("type", "password");
//       show.classList.remove("hide");
//     }
//   };