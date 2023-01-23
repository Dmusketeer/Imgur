const jwt = require("jsonwebtoken");//JSON Web Token can only validate in backend.
const mongoose = require("mongoose");
const User = require("../models/user");

module.exports = (req, res, next) => {
	const { authorization } = req.headers;
	if (!authorization) {
		return res.status(401).json({ error: "You must be logged in" });
	} else {
		const token = authorization.replace("Bearer ", "");
		jwt.verify(token, process.env.JWT_SECRET, (error, payload) => {//JWT contains a payload that is signed by the back-end
			if (error) {
				return res.status(401).json({ error: error });
			} else {
				const { _id } = payload;
				User.findById(_id).then((userData) => {
					req.userData = userData;
                    next();
				});   
			}
		});
	}
};
