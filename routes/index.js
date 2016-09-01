// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: '首页' });
// });

// router.get('/reg',function(req,res,next){
//   res.render('reg',{title:'注册'});
// });

// module.exports = router;

module.exports=function(app){
  //Home Page
  app.get('/',function(req,res){
    res.render('index',{
      title:'首页'
    });
  });

  //Reg Page 
  app.get('/reg',function(req,res){
    res.render('reg',{
      title:'用户注册',
    });
  });

  // catch 404 and forward to error handler
  app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

};
