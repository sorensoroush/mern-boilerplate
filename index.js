const express = require('express')
const app = express()

app.get('/', function (req,res) {
	res.send('Big test')
})

app.listen(5000)
