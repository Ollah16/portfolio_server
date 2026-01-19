const { DAMI_DATA, OLA_DATA } = require("../constants");

exports.handleUserData = (req, res) => {
    const { hostName } = req.body;

    if (!hostName) {
        return res.status(400).json({
            success: false,
            message: "hostName is required",
        });
    }

    const isDamiDomain = hostName.includes("osinaike.dev");

    const data = isDamiDomain ? DAMI_DATA : OLA_DATA;

    return res.status(200).json({
        success: true,
        data,
    });
};
