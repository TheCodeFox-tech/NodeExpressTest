const express = require("express");
const bodyParser = require('body-parser');

const app = express()

app.use(bodyParser.json());

app.listen(8000, function () {
    console.log("Server is running!");
})

const userNames = [
    { name: 'Mark' },
    { name: 'Jill' }
]
app.post('/users', function (req, res) {
    if (userNames.includes(req.body.username)) {
        //Password Check
        res.json({
            success: true,
            users: userNames
        })
    }else {
        res.json({
            success: false,
            message: "Error 401 Unauthorised"
        })
    }
})
app.get('/users/:id', function (req, res) {
    res.json({
        success: true,
        message: "got one user (doesn't have to be registered yet)",
        user: req.params.id
    })
})
app.post('/login',function(req,res){
    const username=req.body.username;
    const password=req.body.password;

    const mockUsername="billyTheKid";
    const mockPassword="superSecret";

    if (username===mockUsername && password===mockPassword){
         res.json({
              success: true,
              message: 'password and username match!',
              token: 'encrypted token goes here'
         })
    } else {
         res.json({
              success: false,
              message: 'password and username do not match'
         })
    }
})