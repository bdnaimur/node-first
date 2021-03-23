const express = require('express')
const app = express();
const users = ["abid", 'jabe', 'asad', 'sabana']
app.get('/', (req, res) =>{
    const fruit = {
      name: "mango",
      price: 300,
      quanatity: 20
    }
    res.send(fruit)
  })
  
  app.listen(3000, ()=>console.log("listening to port 3000"));

  app.get('/users/:id',(req, res) =>{
    const userId = req.params.id;
    const name = users[userId];
    res.send({userId, name});
  })

