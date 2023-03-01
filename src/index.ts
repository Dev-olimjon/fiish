import express from "express";
import cors from "cors"
import { engine } from "express-handlebars";
import service from "./service/service";
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.engine('.hbs', engine({ extname: '.hbs' }))
app.set('view engine', '.hbs')
app.set('views', './pages');
app.get('/',(req,res)=>{
    res.render('home')
})
app.post('/',(req, res)=>{
    service.getaccounts(req.body)
        .then(ref=>{
            res.redirect('/' + req.body.name)
        })
        .catch(err=>{
            console.log(err)
        })
})
app.get('/:name',(req,res)=>{
    res.render('exit',{name: req.params.name})
})
app.listen(process.env.PORT ||9090,  ()=>{
    console.log('server has been started on port 9090')
})