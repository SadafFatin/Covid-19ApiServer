var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
router.use(bodyParser.json());

var dbConn  = require('../lib/dbConnection');


/* GET users listing. */
router.get('/', function(req, res, next) {
  
  dbConn.query('SELECT * FROM user_data',function(err,rows)     {

    if(err) {
        
        res.send(err);
        
    } else {
        res.statusCode = 200;
        res.statusMessage = 'Response is successful'
        res.send({
          'data':{'users' : rows}
        });
    }
});
});


router.post('/', function(req, res, next) {
  var name = req.body.name;
  var age = req.body.age;
  var sex = req.body.sex;
  var body_temparature = req.body.body_temparature;
  var visiting_history= req.body.visiting_history;
  

  var sql = `INSERT INTO user_data (name,age,sex,body_temparature,visiting_history) VALUES ("${name}", "${age}", "${sex}", "${body_temparature}", "${visiting_history}")`;
  dbConn.query(sql,(err,object)=>{
    if(err){
      res.send(err);
    }
    else{
      res.statusMessage="Inserted Successfully";
      res.statusCode = 200;
      res.send({"data":{"msg":"User's data inserted successfylly;"}});
      console.log(object);

    }
  });
});




module.exports = router;
