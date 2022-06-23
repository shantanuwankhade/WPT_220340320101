let dbparams = {
    host:"localhost",
    user: "root",
    password: "cdac",
    database: "india",
    port: 3306,
};

const mysql = require("mysql2");
const con = mysql.createConnection(dbparams);

const express = require("express");
const app = express();


app.use(express.static("cp"));

app.get("/getbook",(req,resp)=> {
    let input = req.query.x;
    console.log(input);
    let output = {bookfoundstatus : false};

    con.query("select * from emp where empno = ?", [input],(error,rows) => {
        if(rows.length > 0) {
            output.bookfoundstatus = true;
            output.book = row[0];
        }
        resp.send(output);
    });
});

app.get("/getall",(req,resp) => {
    con.query("select * from emp",[],(error,rows) =>{
        resp.send(rows);
    });
});




app.listen(900,function() {
    console.log("server connection live at port 900");
});


