const express =  require('express')
const exphbs = require('express-handlebars')
const path =  require('path')
const methodOverride = require('method-override');
const app = express()


//configuraciones
app.set('port',process.env.PORT || 3000)
app.set('views', path.join(__dirname,'views'))

app.engine('.hbs',exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'),'/layouts'),
    partialsDir: path.join(app.get('views'),'/partials'),
    extname: '.hbs'
}));

app.set('view engine','.hbs');

//middlewares
app.use(express.urlencoded({extended:false}));
app.use(methodOverride('_method'));


//routes

app.use(require('./routes/index.route'));
app.use(require('./routes/documentos.route'));
app.use(require('./routes/tipodocumentos.route'));
app.use(require('./routes/entidades.route'));
app.use(require('./routes/series.route'));
app.use(require('./routes/detalles.route'));

/*
app.get('/',(req,ress) =>{
    ress.render('index')
});*/


module.exports = app;