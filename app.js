const express = require("express")
const app = express()
const cors = require("cors")

const port = 5000

// Middleware
app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.status(200).json({
        message:"hello"
    })
})

app.post('/register',require('./routes/register'))
app.post('/login',require('./routes/login'))


app.listen(port,()=>{
    console.log(`http://localhost:${port}
`);
})