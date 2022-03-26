const express=require('express');
const route=require('./routes');
const app=express();
 
const port= process.env.PORT || 3000;

// //Connect to database
// const db=require('./app/config/db');
// db.connect();

const path=require('path');
const handlebars = require('express-handlebars');
//handlebar
app.engine('hbs', handlebars.engine({
    extname: 'hbs',
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

//static files
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));//middleware

//Init Router
route(app);

app.listen(port, () => {
    console.log(`Render Admin Page`);
})