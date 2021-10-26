const mongoose = require('mongoose');
const URL = 'mongodb+srv://noeldb:123@cluster0.rbg9y.mongodb.net/estadias';

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(db => console.log('MongoDB Connected'))
.catch(err => console.log('Error: ' + err));

module.exports = mongoose;