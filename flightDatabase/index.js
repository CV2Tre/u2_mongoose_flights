const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/flightDatabase')
.then(() => {
console.log('connected!')
})
.catch((e) => {
console.error('error!', e.message)
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
console.log("Connected to DB");
});


module.exports = db;