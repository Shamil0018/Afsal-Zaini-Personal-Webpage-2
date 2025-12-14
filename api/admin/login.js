const jwt = require("jsonwebtoken");
const cookie = require("cookie");

module.exports = async (req, res) => {
  if (req.method !== "POST") 
    return res.status(405).json({ error: "Method not allowed" });

  const { password } = req.body;
  if (password !== process.env.ADMIN_PASSWORD)
    return res.status(401).json({ error: "Invalid password" });

  const token = jwt.sign({ admin: true }, process.env.ADMIN_JWT_SECRET, {
    expiresIn: process.env.ADMIN_JWT_MAX_AGE
  });

  res.setHeader("Set-Cookie", cookie.serialize("admin_token", token, {
    httpOnly: true,
    secure: true,
    path: "/",
    sameSite: "lax",
    maxAge: 86400
  }));

  res.json({ success: true });
};
