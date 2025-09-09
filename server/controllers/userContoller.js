import User from "../models/userModel.js"


export const register = (req,res, next) =>{
        try {
            const {fullName , username, password, gender } = req.body;
            console.log(fullName, username);
            res.send("hello regsited");
            
        } catch (error) {
            
        }
}

export const login = (req, res, next)=>{
    res.send("hello from  login routes")
}