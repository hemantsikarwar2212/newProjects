const express = require('express')
const app = express()
const fs = require('fs')

app.use(express.json());


app.get('/readTodo',(req,res)=>{
  fs.readFile('data.txt','utf-8',(err,data)=>{
    if(err){
      res.json({
        "error" : "err"
      })
    }
    else{
       res.json({
        todo:data
      })
    }

  })
  
})
app.post('/addTodo',(req,res)=>{
  const id = req.body.id
  const newTodo = req.body.todo

  fs.appendFile('data.txt',`user${id} \n ${newTodo}\n`,(err)=>{
    if(err){
      res.json({
        err:"failed to write"
      })
    }
    else{
      res.status(200).json({
        msg:"write in the file successfully"
      })
    }

  })

  
  
})
app.put('/updateTodo',(req,res)=>{
  const id = req.body.id
  const updateTodo = req.body.todo
  fs.writeFile('data.txt',updateTodo)

})
app.delete('/deleteTodo',(req,res)=>{


})

app.listen(3000,()=>{
  console.log("port is ruuning");
  
});