const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const token = req.cookies?.token;
  if (!token)
    return res.status(401).json({ message: "No token, auth denied." });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; //{id, email}
    next();
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error." });
  }
};
