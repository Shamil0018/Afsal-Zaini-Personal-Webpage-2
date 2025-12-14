const { getClient } = require("../_mongodbClient");
const jwt = require("jsonwebtoken");

function getToken(req) {
  const cookieHeader = req.headers.cookie || "";
  return cookieHeader
    .split(";")
    .map(x => x.trim())
    .find(x => x.startsWith("admin_token="))
    ?.split("=")[1];
}

module.exports = async (req, res) => {
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });

  try {
    const token = getToken(req);
    if (!token) return res.status(401).json({ error: "Unauthorized" });

    jwt.verify(token, process.env.ADMIN_JWT_SECRET);

    const client = await getClient(process.env.MONGODB_URI);
    const col = client.db().collection("contacts");

    const contacts = await col.find().sort({ createdAt: -1 }).toArray();

    res.json({ contacts });
  } catch (e) {
    console.error("ADMIN ERROR:", e);
    res.status(401).json({ error: "Unauthorized" });
  }
};
