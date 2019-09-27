const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())

app.use(bodyParser.urlencoded())
app.use(bodyParser.json())


const deaths = [
    {
        image: 'https://i1.wp.com/metalinjection.net/wp-content/uploads/2019/04/davidhasselhoff.jpg?fit=693%2C444&ssl=1', 
        name: 'David Hasselhoff', 
        date: 'Today', 
        cause: 'Shark Bait Oohaha', 
        location: 'Sea World, Denver, CO'
    },
    {
        image: 'https://i.pinimg.com/originals/50/7f/ed/507fed6c52c05302a6bf8c912d955baf.jpg',
        name: 'Surfer Guy', 
        date: 'Before it was cool', 
        cause: 'Shredding mad waves', 
        location: 'The Chill Zone'
    },
    {
        image: 'https://www.trzcacak.rs/myfile/detail/25-251161_business-suit-png-transparent-man-in-suit.png', 
        name: 'Business Suit McGee', 
        date: 'Next Week', 
        cause: `Swimming in a full suit`, 
        location: 'Off the coast of Silicon Valley'
    },
    {
        image: 'https://cdn1.thr.com/sites/default/files/imagecache/NFE_portrait/2012/06/franco_a.jpg', 
        name: 'James Franco', 
        date: 'Now', 
        cause: `Couldn't see where he was going`, 
        location: 'Gulf of Hollywood'
    },
    {
        image: 'https://justdate.com/assets/covers/nerdy-dudes.jpg', 
        name: 'Nerdmon', 
        date: '1995', 
        cause: `Tried to do accurate float math with JavaScript`, 
        location: 'JavaScript Land'
    },
]


app.get('/', (req, res) => {
    res.json(deaths)
})

app.post('/', (req, res) => {
    const {image, name, date, cause, location} = req.body
    deaths.push({image, name, date, cause, location})
    console.log(deaths[deaths.length - 1])
    res.json(deaths[deaths.length - 1])
})

app.listen(8080, () => {
    console.log('listening...')
})