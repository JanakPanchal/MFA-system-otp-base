const db = require("../firebasedata/firebase")

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
      });

      return result
  }



  generateOtp = (n = 5) =>{
    return Math.floor(Math.random() * (9 * (Math.pow(10, n)))) + (Math.pow(10, n));
  }