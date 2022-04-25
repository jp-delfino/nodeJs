const html = require("html")
const express = require("express")
const app = new express()
const db = require("./conection")
const ejs = require("ejs")
//const session = require("express-session")

// app.use(session({
//     secret: "123321123321123321"
// }))
// app.engine('html',require('ejs').renderFile)

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get("/",(req,res)=>{
    res.render("index")
})

app.listen(8091,() => {
    console.log("Server Started")
})

/*
const inserirNome = async (nome='')=>{
    if(nome!=''){
        db.query(`INSERT INTO public.teste(nome) VALUES (${nome})`)
    }
       
    
}



app.get("/:name",(req,res)=>{
        res.send(req.params.name)
        inserirNome(req.params.name)

})

*/