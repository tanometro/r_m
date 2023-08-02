export default function validations (inputs) {
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}$/

    let errors = {};

    (!inputs.email) ? errors.email = "Debe haber un email papa frita" : errors.email = "";
    (inputs.email.length > 35) ? errors.email = "Menos de 35 caracteres pf" : errors.email = "";
    (!regexEmail.test(inputs.email)) ? errors.email = "Email no válido pf" : errors.email = "";
    (!regexPassword.test(inputs.password)) ? errors.password = "Contraseña inválida pf" : errors.password = "";
    
    return errors;
}
