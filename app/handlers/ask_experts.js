var mongoose = require('mongoose');
var Comment = mongoose.model('Blog');


function get(req, res) {
    res.render( 'ask_experts/index');
}


function create(req, res) {

  var title = req.body.title;
  var description = req.body.description;
  var author = req.body.author;

  var blog = new Blog({ title: title, description: description, author: author });

  blog.save(function (err) {
    if (err) {
      return console.error(err); // we should handle this
    }

    res.redirect( '/ask_experts/' + title );

  });


}

function show(req, res) {
    var title = req.query.title
    Blog.findOne({title: title}).exec(function(err, blog) {
        res.render( 'ask_experts/show', {
          blog: blog
        });
    });
}

function createComment(req, res) {

  var name = req.body.name;
  var description = req.body.description;
  var blogTitle = req.body.blogTitle;



  Blog.findOne({title: blogTitle}).exec(function(err, blog) {
      blog.comments.push({ name: name, description: description });
      blog.save(function (err) {
          if (err) {
            return console.error(err); // we should handle this
          }
          res.redirect( '/ask_experts/' + title );
      });
  });


}

module.exports = {
    get: get,
    create: create,
    show: show,
    createComment: createComment
}
