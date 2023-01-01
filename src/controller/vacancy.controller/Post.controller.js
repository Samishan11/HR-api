const vacencyModel = require('../../model/vacancy.model/vacancy.model');
const { StatusCodes } = require("http-status-codes");

const PostVacency = async (req, res) => {
    let { vacanctTitle, applicantNumber, position, dueDate, vacancyDescription, jobType, jobSalary, location } = req.body;
    try {
        if (!req.userInfo.isAdmin) {
            return res.send({
                message: "Unauthorized access",
                success:false
            })
        }
        const _res = await new vacencyModel({
            vacanctTitle,
            applicantNumber,
            position,
            dueDate,
            postAt:  new Date().toDateString(),
            vacancyDescription,
            jobSalary,
            jobType,location
        });
        await _res.save();
        return res.send({
            message: "Vacancy Created",
            success:true
        })
    } catch (error) {
        return res.send({message:"Internal server error", success:false});
    }
}
module.exports = PostVacency;
