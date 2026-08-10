const express = require("express");
const app = express();
const port = 3000;
//workshop1
const studentt = [
    {"name":"alice","id":"6512345678","major":"Computer Science"}
]

app.get('/',(req,res)=>{
    res.send("hello express");
});

//workshop2
app.get('/about', (req, res) => {
    res.send("About");
});

app.get('/contact', (req, res) => {
    res.send("Contact");
});


//workshop3
app.get('/student',(req,res)=>{
    res.send(studentt);
});



//workshop4
const productt = [
    {"product id":"101"}
]

app.get('/product/productt',(req,res)=>{
    res.send(productt);
});

//workshop5
app.get('/square', (req, res) => {
    const num = Number(req.query.number);

    if (isNaN(num)) {
        return res.status(400).send("ต้องใส่เลข");
    }

    const result = num * num;
    res.send(`Square = ${result}`);
});


//workshop 6
app.get('/grade', (req, res) => {
    const score = Number(req.query.score);

    if (isNaN(score)) {
        return res.status(400).send("ต้องใส่คะแนน");
    }

    let grade = 'F';

    if (score >= 80 && score <= 100) {
        grade = 'A';
    } else if (score >= 70) {
        grade = 'B';
    } else if (score >= 60) {
        grade = 'C';
    } else if (score >= 50) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    res.send(`Return Grade : ${grade}`);
});

//workshop7

const bookk = [
    {"id":"1","title":"HTML"},
    {"id":"2","title":"JAVA SCRIPT"},
]

app.get('/book',(req,res)=>{
    res.send(bookk);
});


app.listen(port, () =>{
    console.log("sever is running");
})


