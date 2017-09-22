const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

//  ||||||||||||||     middleware          |||||||||||||||||
app.use(bodyParser.json());


//  ||||||||||||||     controllers         |||||||||||||||||

const userCtrl = require('./userCtrl');


//  ||||||||||||||     endpoints           |||||||||||||||||


app.put('/api/users/:id', userCtrl.putUser)
app.post('/api/users/', userCtrl.addUser)
app.delete('/api/users/:id', userCtrl.deleteUser)

app.get('/api/users', userCtrl.getUsers);
app.get('/api/users/:id',userCtrl.getUserId)
app.get('/api/admins', userCtrl.getAdmins)
app.get('/api/nonadmins', userCtrl.getNoAdmins)
app.get('/api/user_type/:type', userCtrl.getUserType)




app.listen(port, ()=>(console.log(`Issa port name ${port}`)))