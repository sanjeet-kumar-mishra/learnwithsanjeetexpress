const express = require('express')
const app = express()
const port = 8000
const path = require('path')
const manpowercalc = require('./Routers/manpowercalc')

app.use(express.json())

app.use(express.static(path.join(__dirname, "../learnwithsanjeet/build")))

app.get('*', (req, res) =>{
    res.sendFile(path.join(__dirname, "../learnwithsanjeet/build", "index.html"))
})

//Routers Section
app.use('/services/manpowercalc', manpowercalc)


app.listen(port, () =>{
    console.log(`Server started in port ${port}`);
})