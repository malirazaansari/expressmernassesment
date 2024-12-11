const { verifyToken } = require("../utils/jwt");

exports.authMiddleware = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({ message: "Access denied, token missing" });
  }

  try {
    const decoded = verifyToken(token);

    req.userId = decoded.userId;

    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
};
