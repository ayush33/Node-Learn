const http = require('http')
const express = require('express')
const bodyParser = require('body-parser');
const app = express();


const adminRouter = require('./routes/admin')
const shopRouter = require('./routes/shop')

// use allow to add middelware and if we not call next() it will not go to next
// app.use('/', (req, res, next)=>{
//     console.log("In the middelware");
//     next(); // allows the request to next middelware
// });

app.use(bodyParser.urlencoded({extended:false}));
app.use('/admin', adminRouter)
app.use(shopRouter)

app.use((req, res, next)=>{
    res.status(404).send('<h1>Page Not Found</h1>')
})


app.listen(3000);