const vacancyFormModel = require('../../model/applicant.model/applicant.model');

const GetVacency = async (req, res) => {
    
    try {
        const _res = await vacancyFormModel().find();
        return res.send({
            message: "Application Get",
            success: true,
            data: _res
        });

    } catch (error) {
        return res.send({ message: "Internal server error", success: false });
    }
};

module.exports = GetVacency;
