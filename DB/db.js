const MongoClient = require('mongodb').MongoClient

DBurl = "mongodb+srv://sanjityaya:Sanjeet111@cluster0.gbw3x.mongodb.net/EmployeeData?retryWrites=true&w=majority"


const client = new MongoClient(DBurl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

module.exports = client