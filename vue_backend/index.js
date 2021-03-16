const express = require('express');
const mongoose = require('mongoose');
const userRoute = require('./routes/user');
const cors = require('cors');
const app = new express();
mongoose.connect('mongodb://localhost/onlineShop', {useNewUrlParser:true, useUnifiedTopology:true})
.then(console.log('mongodbga ulandi'))
.catch((err)=>{
    console.log(err)
})
app.use(express.json());
app.use(cors());
app.get('/', async(req, res, next)=>{
    res.send("hammaga salom sizlarga ham dsflkwjeoirjlfkdjs")
})
app.use('/user', userRoute);


app.listen(3000, console.log(`3000 chi port eshtilmoqda`));
// console.log(app);