const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET || "secret_key";

exports.generateToken = (userId) => {
  return jwt.sign({ userId }, secret, { expiresIn: "1h" });
};

exports.verifyToken = (token) => {
  return jwt.verify(token, secret);
};
