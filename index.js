import axios from 'axios'
import express from 'express'
import moment from 'moment'
import { nanoid } from 'nanoid'
const app = express()

const users = []

app.get('/', async (req, res) => {

    const response = await axios.get('https://randomuser.me/api/')

    const gender = response.data.results[0].gender
    const first = response.data.results[0].name.first
    const last = response.data.results[0].name.last

    const user = {
        gender,
        first,
        last,
        id: nanoid(),
        timestamp: moment().format('LLL')
    }
    users.push(user)

    const newUsers = _.partition(users, (item) => item.gender === 'female')

    res.json({
        users: 
    })
})
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})
