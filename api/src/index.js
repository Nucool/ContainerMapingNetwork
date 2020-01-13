const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/test', (req, res) => res.json({
    test: 'hello'
}))
app.listen(7001, () => console.log('Server ready'))