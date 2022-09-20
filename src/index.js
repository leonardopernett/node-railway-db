import express from 'express'
import { pool } from './database.js'

const app = express()

app.use(express.json())

app.get('/', (req,res) => {
  res.json('welcome to server')
})

app.get('/users', async(req,res) => {
  const [ resp ] = await pool.query('SELECT * from users')
  res.json(resp)
})
 
app.post('/create', async(req,res) => {
  const { firstname } = req.body
  await pool.query('INSERT INTO users (firstname) values (?)',[firstname])
  res.json({message:'inserted'})
})

function init(){
    return new Promise( (resolve, reject) => {
      app.listen(process.env.PORT || 3000)
      resolve('server on port 3000') 

      if(reject){
        return "error"
      }
    }) 
}

init()
 .then( (resp) => console.log(resp))
 .catch( (err) => console.error(err))
 