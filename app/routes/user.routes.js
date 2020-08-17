
module.exports = app => {
    const user = require("../controller/user.controller");
    app.post("/api/gettoken", user.genratetoken)
    app.post("/api/otpverification" , user.otpVerification)
};