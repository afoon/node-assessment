const user = require('./userData.json');

const getUsers = (req,res,next) =>{
    if(req.query.age){
        let age = user.filter(user => user.age < req.query.age)
        return res.status(200).json(age)
    }
    if(req.query.lastname){
        let lastname = user.filter(user => user.last_name === req.query.lastname);
        return res.status(200).json(lastname)
    }
    if(req.query.email){
        let email = user.filter(user => user.email == req.query.email)
        return res.status(200).json(email)
    }
    if(req.query.favorites){
        let favs = user.filter(user => user.favorites.includes(req.query.favorites))
        return res.status(200).json(favs)
    }
    else{
    return res.status(200).json(user)}
}
const getUserId = (req,res,next) => {
    if(req.params.id){
        let id = user.filter(user => user.id == req.params.id)
        console.log(id)
        return res.status(200).json(id);
    }
    else{return res.status(404).json(null)}
}
const getAdmins= (req,res,next) =>{
    return res.status(200).json(user.filter(user => user.type === "admin" || "Admin"))
    }
const getNoAdmins= (req,res,next) =>{
        return res.status(200).json(user.filter(user => user.type != "admin"||"Admin"))
        }
const getUserType = (req,res,next) => {
if(req.params.type){
    let type = user.filter(user => user.type == req.params.type)
    return res.status(200).json(type)
}}

const putUser = (req,res,next) => {
    if (req.params.id){
    let stuff = user.filter(user => user.id == req.params.id);
    stuff.splice(0,1,req.body);
    return res.status(200).json(stuff);
    }
}

const addUser = (req,res,next) =>{
    req.body.id = user.length+1;
    user.push(req.body);
    return res.json(user);
}
const deleteUser = (req,res,next) =>{
    user.splice((req.params.id-1), 1);
    return res.status(200).json(user);
}


module.exports ={
    getUsers,
    getUserId,
    getAdmins,
    getNoAdmins,
    getUserType,
    putUser,
    addUser,
    deleteUser
}