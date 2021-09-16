const mongose = require('mongoose')
const { connect } = require('./server')
const MONGODB_URI = 'mongodb://localhost/mongocsv'
mongose.connect(MONGODB_URI,{
    useUnifiedTopology: true,
    UseNewUrlParser:true
})
    .then(db => console.log('Database is connected'))
    .catch(err => console.loge(err));