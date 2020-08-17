const UserModel = require("../model/dbconfig")


exports.genratetoken = ( req , res) => {
    
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }

    res.status(200).send({
        data : generateUserData(req.body)
    })

  }


  generateUserData = (data) => {
      result = []
      data.forEach(element => {
         element["otp"] = generateOtp()
         result.push(element) 
         UserModel.findOneAndUpdate({clinet_id : element.clinet_id ,app_name:element.app_name,app_key: element.app_key}, { $set: {otp : element["otp"] }}, {new: false} ,function(err, user){
          if (err) {
            console.log('got an error');
          }
        });
     
  })
  return result
}




  generateOtp = (n = 5) =>{
    return Math.floor(Math.random() * (9 * (Math.pow(10, n)))) + (Math.pow(10, n));
  }


  exports.otpVerification = (req , res) =>{
         
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
    console.log(req.body);
    UserModel.findOne({clinet_id : req.body.clinet_id ,app_name:req.body.app_name,app_key: req.body.app_key}).then(user => {
      if(user.otp == req.body.otp){
        res.status(200).send({
          status  : true
        })
      }else{
        res.status(200).send({
          status  : false
        })
      }
    });
  }