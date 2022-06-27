import {v4 as uuidv4} from "uuid";
let users = [
]
export const getuser = (req,res)=>{
    res.send(users)
}

export const createuser = (req,res)=>{
    const user = req.body;
    const newuser= {...user, id:uuidv4()}
    users.push(newuser);
    console.log(req.body);
    res.send(`user with the name ${user.firstName} added to db`);
};

export const getbyid = (req,res)=>{
    const {id} =req.params;
    const founduser = users.find((user)=>user.id===id);
    res.send(founduser);
}

export const deletebyid = (req,res)=> {
    const {id} = req.params;
    users = users.filter((user)=>user.id !== id);
    res.send(`user deleted with id ${id}`);
}

export const updatebyid = (req,res)=>{
    const {id} = req.params;
    const user = users.find((user)=> user.id===id)
    const {firstName,lastName,age} = req.body;
    if(firstName){
        user.firstName = firstName;
    }
    if(lastName){
        user.lastName = lastName;
    }
    if(age){
        user.age = age;
    }
    res.send(`updated id ${id}`);
}