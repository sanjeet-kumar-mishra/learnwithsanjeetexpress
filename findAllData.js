const MongoClient = require('mongodb').MongoClient

DBurl = "mongodb+srv://sanjityaya:Sanjeet111@cluster0.gbw3x.mongodb.net/testing_01?retryWrites=true&w=majority"

client = new MongoClient(DBurl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

async function findAllData(a) {
    try {
        await client.connect()
        const db = client.db("EmployeeData")
        const collection = db.collection("ActiveEmployees")
        const result = await collection.findOne(a)
        console.log(result)
    } catch (error) {
        console.log(error)
    } finally {
        await client.close()
    }
}

module.exports = findAllData