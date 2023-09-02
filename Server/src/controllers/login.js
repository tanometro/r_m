const {User} = require("../DB_connection");

const login = async (req, res) => {
    const {email, password} = req.query;

    if(!email || !password){
        res.status(400).send("Faltan datos")
    }
    try{
        const user = await User.findOne({
            where: {email}
        })
        if(!user) return res.status(400).send("Usuario no encontrado");

        return user.password === password ? res.status(202).json({access:true})
        : res.status(403).send("Contraseña incorrecta"); 

    }
    catch(error){
        res.status(500).json({error:error.message})
    }
}