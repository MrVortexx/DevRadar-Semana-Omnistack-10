const express = require('express')
const app = express()
const cors =  require('cors')
const routes = require('./routes')
const mongoose = require('mongoose')


const URI = 'mongodb+srv://vortex034:vortex@cluster0-zravt.mongodb.net/test?retryWrites=true&w=majority'
mongoose.Promise = global.Promise

const connectDB = async ()=> {mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
console.log('db connected');
 }
connectDB()
app.use(cors())
app.use(express.json())

app.use(routes)




app.listen(8000, console.log('ronning on 8000 port')
)