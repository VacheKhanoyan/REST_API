const express = require('express');
const app = express();
let bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

let users = [
  {
  id: 1,
  name: 'Vache',
  username: 'Vache84',
  password: 'ajkkads',
  gender: 'male',
  email: 'abrakadabra@gmail.com'
},
{
id: 2,
name: 'Smbo',
username: 'Smbo89',
password: 'kdksajks',
gender: 'male',
email: 'dskjda@gmail.com'
}
]
app.get('/', function (req,res){
  res.send('Hello Api');
})

app.get('/users', function (req,res){
  res.send(users);
})
app.get('/users/:id', function (req,res){
  console.log(req.params);
  let user = users.find(function(users){
    return users.id === Number(req.params.id)
  });
  res.send(users);
})
app.post('/users', function (req,res){
  let user = {
    id: Date.now(),
    name: req.body.name
  };
  users.push(user);
  res.send(user);
})
app.put('/users/:id', function (req, res){
  let user = users.find(function (user){
    return user.id === Number(req.params.id)
  });
  user.name = req.body.name;
  res.sendStatus(200);
})
app.delete('/users/:id', function(req,res){
  users = users.filter(function (user){
    return user.id !==Number(req.params.id);
  })
  res.sendStatus(200);
})
app.listen(1234,function(){
  console.log('API app Started')
})
