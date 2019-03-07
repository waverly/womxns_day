const validateAddName = req =>
    !!(req.body) &&
    typeof req.body.name === "string" &&
    /.{2,100}/i.test(req.body.name);


module.exports.validateAddName = validateAddName;
