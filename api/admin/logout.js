const cookie = require("cookie");

module.exports = async (req, res) => {
  res.setHeader("Set-Cookie", cookie.serialize("admin_token", "", {
    httpOnly: true,
    secure: true,
    path: "/",
    expires: new Date(0),
    sameSite: "lax"
  }));
  res.json({ success: true });
};
