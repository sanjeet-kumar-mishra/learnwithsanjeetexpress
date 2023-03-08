const express = require('express')
const router = express.Router()
const path = require('path')
const client = require('../DB/db')

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../../learnwithsanjeet/build", "index.html"))
})

router.post('/', async (req, res) => {
    await client.connect()
    db = client.db("EmployeeData")
    mydata = db.collection("ActiveEmployees")
    try {
        cardno = await mydata.findOne({ "CARDNO": parseInt(req.body.searchemployee) })
        if (cardno == null) {
            empcode = await mydata.findOne({ "Emp_Code": parseInt(req.body.searchemployee) })
            if (empcode == null) {
                esicno = await mydata.findOne({ "ESINO": parseInt(req.body.searchemployee) })
                if (esicno == null) {
                    uanno = await mydata.findOne({ "PF_UAN_NO": parseInt(req.body.searchemployee) })

                    const uannowise = {
                        "Name": uanno["NAME"],
                        "Emp Code": uanno["Emp_Code"],
                        "Card No": uanno["CARDNO"],
                        "Date of Joining": uanno["DOJ"],
                        "Department": uanno["DEPARTMENT"],
                        "Sub-department": uanno["SUBDEPT"],
                        "Designation": uanno["DEISG"],
                        "ESIC No": uanno["ESINO"],
                        "UAN No": uanno["PF_UAN_NO"],
                        "Unit": uanno["UNIT"],
                        "Line No": uanno["Line"]
                    }
                    res.setHeader('Content-Type', 'application/json')
                    res.send(uannowise)
                } else {
                    const esicnowise = {

                        "Name": esicno["NAME"],
                        "Emp Code": esicno["Emp_Code"],
                        "Card No": esicno["CARDNO"],
                        "Date of Joining": esicno["DOJ"],
                        "Department": esicno["DEPARTMENT"],
                        "Sub-department": esicno["SUBDEPT"],
                        "Designation": esicno["DEISG"],
                        "ESIC No": esicno["ESINO"],
                        "UAN No": esicno["PF_UAN_NO"],
                        "Unit": esicno["UNIT"],
                        "Line No": esicno["Line"]
                    }
                    res.setHeader('Content-Type', 'application/json')
                    res.send(esicnowise)
                }
            } else {

                const empcodewise = {
                    "Name": empcode["NAME"],
                    "Emp Code": empcode["Emp_Code"],
                    "Card No": empcode["CARDNO"],
                    "Date of Joining": empcode["DOJ"],
                    "Department": empcode["DEPARTMENT"],
                    "Sub-department": empcode["SUBDEPT"],
                    "Designation": empcode["DEISG"],
                    "ESIC No": empcode["ESINO"],
                    "UAN No": empcode["PF_UAN_NO"],
                    "Unit": empcode["UNIT"],
                    "Line No": empcode["Line"]
                }
                res.setHeader('Content-Type', 'application/json')
                res.send(empcodewise)

            }

        } else {
            const cardwise = {
                "Name": cardno["NAME"],
                "Emp Code": cardno["Emp_Code"],
                "Card No": cardno["CARDNO"],
                "Date of Joining": cardno["DOJ"],
                "Department": cardno["DEPARTMENT"],
                "Sub-department": cardno["SUBDEPT"],
                "Designation": cardno["DEISG"],
                "ESIC No": cardno["ESINO"],
                "UAN No": cardno["PF_UAN_NO"],
                "Unit": cardno["UNIT"],
                "Line No": cardno["Line"]
            }
            res.setHeader('Content-Type', 'application/json')
            res.send(cardwise)
        }
    } catch (error) {
        res.setHeader('Content-Type', 'application/json')
        res.send(error)
    }


})

module.exports = router