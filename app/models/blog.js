var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var blogSchema = new Schema( {
    title: String,
    description: String,
    author: String,
    created: { type: Date, default: Date.now },
    comments: [{description: String, name: String, posted: { type: Date, default: Date.now } }]
});

module.exports = mongoose.model('Blog', blogSchema);
