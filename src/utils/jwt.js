const jwt = require("jsonwebtoken");

const secret = process.env.JWT_SECRET || "your_secret_key";

const generateToken = (userId) => {
  return jwt.sign({ userId }, secret, { expiresIn: "1h" });
};

const verifyToken = (token) => {
  return jwt.verify(token, secret);
};

module.exports = { generateToken, verifyToken };
