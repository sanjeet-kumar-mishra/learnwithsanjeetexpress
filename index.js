const express = require('express')
const app = express()
const port = 8000
const path = require('path')
const client = require('./DB/db')

app.use(express.json())

app.use(express.static(path.join(__dirname, "../learnwithsanjeet/build")))

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, "../learnwithsanjeet/build", "index.html"))
})

app.get('/services/employeedetails', (req, res) =>{
    res.sendFile(path.join(__dirname, "../learnwithsanjeet/build", "index.html"))
})

app.post('/services/employeedetails', async (req, res) =>{
    async function result(){
        try {
            await client.connect()
            const db = client.db("EmployeeData")
            const collection = db.collection("ActiveEmployees")
            const aresult = await collection.findOne({"CARDNO": parseInt(req.body.searchemployee)})
            res.setHeader('Content-Type', 'application/json')
            res.send(aresult)
        } catch (error) {
            console.log(error)
        } finally {
            await client.close()
        }
    }
    result()
})


app.listen(port, () =>{
    console.log(`Server started in port ${port}`);
})