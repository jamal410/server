import express from 'express';
import cors from 'cors';

const port = 3000 || process.env.PORT
const app = express()

let todos =[];
app.use(express.json());
app.use(cors())
app.post('/todo', (req, res) => {

    todos.push(req.body.text);

    res.send({
     message:"your todo is saved" ,
     data:todos  
    })
})

app.get('/todos',(req,res)=>{
    res.send({
        message:"here is your todo list",
        data:todos
    })
})
    

