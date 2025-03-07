const express = require('express')
const mysql = require('mysql')
const app = express()
const port = 3000

app.listen(port, () => {
    console.log(`Server is running on port 3000: ${port}`)
})

app.get(`/`, (req, res)=> {
    res.send('This is a nodejs server and his a very good bad boy')
})

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'users_db'
})
db.connect((err) => {
    if (err) {
        console.log(`Database connection: Failed to load his a very bad boy`, err.message)
    }else{
        console.log(`Database connection: His a good boy`)
    }
    
})

app.get(`/users`,(req, res)=> { 
    db.query('SELECT * FROM users', (err, result) => {
        if (err) {
            res.send(err.message)
        }else{
            res.send(result)
        }
        
    })
})