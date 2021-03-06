const Pool = require('pg').Pool
const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: 'api',
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
  ssl: true
})

const getUsers = (req, res) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).json(results.rows)
    })
  }

  const getUserById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const createUser = (request, response) => {
    const { name, username, password } = request.body
  
    pool.query('INSERT INTO users (name, username, password) VALUES ($1, $2, $3)', [name, username, password], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`User added with ID: ${result.insertId}`)
    })
  }

  const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const { name, username, password } = request.body
  
    pool.query(
      'UPDATE users SET name = $1, username= $2, password= $3 WHERE id = $4',
      [name, username, password, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`User modified with ID: ${id}`)
      }
    )
  }

  const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User deleted with ID: ${id}`)
    })
  }

  const getRecipes = (req, res) => {
    console.log('getting')
    pool.query('SELECT * FROM recipes ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).json(results.rows)
    })
  }

  const getRecipeById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM recipe WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const getRecipesByType = (request, response) => {
    const type = request.params.type
    console.log('by type')
  
    pool.query('SELECT * FROM recipe WHERE type = $3', [type], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

//   const getRecipeByUserId = (request, response) => {
//     const userId = parseInt(request.params.userId)
  
//     pool.query('SELECT * FROM recipe WHERE userId = $5', [userId], (error, results) => {
//       if (error) {
//         throw error
//       }
//       response.status(200).json(results.rows)
//     })
//   }

  const createRecipe = (request, response) => {
    console.group('request', request.body)
    const { name, type, link, notes, img } = request.body
    console.log('create')
  
    pool.query('INSERT INTO recipes (name, type, link, notes, img) VALUES ($1, $2, $3, $4, $5)', [name, type, link, notes, img], (error, results) => {
      if (error) {
        throw error
      }
      console.log('here')
      response.status(201).send('New recipe added!')
    })
  }

  const updateRecipe = (request, response) => {
    const id = parseInt(request.params.id)
    const { name, type, link, notes } = request.body
  
    pool.query(
      'UPDATE recipes SET name = $1, type= $2, link= $3, notes= $4 WHERE id = $5',
      [name, type, link, notes, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`Recipe modified with ID: ${id}`)
      }
    )
  }

  const deleteRecipe = (request, response) => {
    const id = parseInt(request.params.id)
    console.log('deleting')
    pool.query('DELETE FROM recipes WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Recipe deleted with ID: ${id}`)
    })
  }

  module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    getRecipes,
    getRecipeById,
    getRecipesByType,
    // getRecipeByUserId,
    createRecipe,
    updateRecipe,
    deleteRecipe
  }
