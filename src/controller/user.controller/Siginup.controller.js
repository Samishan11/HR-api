const bcryptjs = require("bcryptjs");
const user = require('../../model/user.model/user.model');

const Register = async (req, res) => {
    const data = req.body;
    const password = data.password;
    let emailExist = await user.findOne({ email: data.email });
    let usernameExist = await user.findOne({ username: data.username });
    if (emailExist) {
        return res.json({
            message: "Email already exists",
            success: false,
            field: "email",
        });
    }
    if (usernameExist) {
        return res.json({
            message: "Username already taken",
            success: false,
            field: "username",
        });

    }
    bcryptjs.hash(password, 10, function (e, hashed_pw) {
        const sData = new user({
            firstName: data.firstName,
            lastName: data.lastName,
            username: data.username,
            password: hashed_pw,
            email: data.email,
            userRole: data.userRole,
            address: data.address
        });
        sData.save(function (err) {
            // console.log(err)
            if (err) {
                res.json({ message: err.message });
            } else {
                res.json({ message: "Registered Successfully", success: true });
            }
        });
    });
}
module.exports = Register;
