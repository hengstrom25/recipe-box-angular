const Pool = require('pg').Pool
const pool = new Pool({
  user: 'heidi',
  host: 'localhost',
  database: 'api',
  password: 'password',
  port: 5432,
//   user: process.env.PG_USER,
//   host: process.env.PG_HOST,
//   database: process.env.DATABASE_URL,
//   password: process.env.PG_PASSWORD,
//   port: process.env.PG_PORT,
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
    const { name, type, link, notes } = request.body
  
    pool.query('INSERT INTO recipes (name, type, link, notes, userId) VALUES ($1, $2, $3, $4, $5)', [name, type, link, notes], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`Recipe added with ID: ${result.insertId}`)
    })
  }

  const updateRecipe = (request, response) => {
    const id = parseInt(request.params.id)
    const { name, type, link, notes } = request.body
  
    pool.query(
      'UPDATE recipes SET name = $1, type= $2, link= $3, notes= $4, userId=$5 WHERE id = $6',
      [name, type, link, notes, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`Recipe modified with ID: ${id}`)
      }
    )
  }

  module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    getRecipes,
    getRecipeById,
    // getRecipeByUserId,
    createRecipe,
    updateRecipe
  }