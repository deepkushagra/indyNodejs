var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/indyUsers', { useNewUrlParser: true });

var emailSchema = new mongoose.Schema({
    email: {type: String, required: true, unique: true}
});

var user = mongoose.model('indyUsers', emailSchema);

module.exports = user;