const mongoose = require('mongoose')

const db = 'mongodb+srv://Glrapozo:gl250276@cluster0.lxjtyoe.mongodb.net/project?retryWrites=true&w=majority';

const connection = mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

module.exports = connection