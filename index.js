const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 3000
var cors = require('cors')

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
)

app.use(cors())

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, OPTIONS');
    next();
});

// allowCrossDomain = function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//   res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
//   if ('OPTIONS' === req.method) {
//     res.sendStatus(200);
//   } else {
//     next();
//   }
// };

// app.use(allowCrossDomain);

// app.use(cors({origin: 'http://localhost:3000'}));

app.get('/', (req, res) => {
    // res.setHeader('Access-Control-Allow-Origin', '*');
    res.json({ info: 'Recipe Box' })
})

app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)

app.get('/recipes', db.getRecipes)
// app.get('/recipes/:type', db.getRecipesByType)
// app.get('/recipes/:id', db.getRecipesById)
app.post('/recipes', db.createRecipe)
app.patch('/recipes/:id', db.updateRecipe)
// app.put('/users/:id', db.updateUser)
app.delete('/recipes/:id', db.deleteRecipe)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})