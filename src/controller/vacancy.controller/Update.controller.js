const vacencyModel = require('../../model/vacancy.model/vacancy.model');

const UpdateVacancy = async (req, res) => {
    let { vacanctTitle, applicantNumber, position, dueDate, postAt, vacancyDescription, jobType, jobSalary, location } = req?.body;

    try {
        if (!req.userInfo.isAdmin) {
            return res.send({
                message: "Unauthorized access",
                success: false
            })
        }
        const _res = await vacencyModel.findByIdAndUpdate(req.params.id, {
            vacanctTitle,
            applicantNumber,
            position,
            dueDate,
            postAt,
            vacancyDescription,
            jobSalary,
            jobType, location
        }, { new: true });
        return res.send({
            message: "Vacancy Update",
            success: true
        })
    } catch (error) {
        console.log(error)
        return res.send({ message: "Internal server error", success: false });
    }
}
module.exports = UpdateVacancy;
