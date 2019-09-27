const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

// app.use(cors)

app.use(bodyParser.urlencoded())
app.use(bodyParser.json())


const deaths = [
    {image: 'https://i1.wp.com/metalinjection.net/wp-content/uploads/2019/04/davidhasselhoff.jpg?fit=693%2C444&ssl=1', 
     name: 'David Hasselhoff', 
     date: 'Today', 
     cause: 'Shark Bait Oohaha', 
     location: 'Sea World, Denver, CO'}
]


app.get('/', (req, res) => {
    res.json({deaths})
})





app.listen(8080, () => {
    console.log('listening...')
})