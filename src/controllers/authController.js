const User = require("../models/User");
const { generateToken } = require("../utils/jwt");

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const validPassword = await user.comparePassword(password);
    if (!validPassword)
      return res.status(401).json({ message: "Invalid credentials" });

    const token = generateToken(user.id);
    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
