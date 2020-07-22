//Install express server
const express = require('express');
const path = require('path');
const db = require('./queries')
const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/recipe-box-angular'));

app.use(express.static('src'));

app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});

app.get('/*', function(req,res) {

res.sendFile(path.join(__dirname+'/dist/recipe-box-angular/src/index.html'));    
// res.sendFile(path.join(__dirname, '../src' + 'index.html'));
});

app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)

app.get('/recipes', db.getRecipes)

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080, () => {
    console.log('Hi Heroku')
    console.log(`App is running on port ${process.env.PORT || 8080}.`)
});
