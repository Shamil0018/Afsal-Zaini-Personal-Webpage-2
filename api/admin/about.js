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
    if (req.method === "GET") {
        // GET is public for about content usually, but we keep it here just in case
    }

    const token = getToken(req);
    if (!token) return res.status(401).json({ error: "Unauthorized" });

    try {
        jwt.verify(token, process.env.ADMIN_JWT_SECRET);
    } catch (e) {
        return res.status(401).json({ error: "Unauthorized" });
    }

    const client = await getClient(process.env.MONGODB_URI);
    const db = client.db();
    const col = db.collection("settings");

    if (req.method === "POST" || req.method === "PUT") {
        try {
            const { type, content } = req.body; // type could be 'about_stats' or 'about_story'
            await col.updateOne(
                { type },
                { $set: { content, updatedAt: new Date() } },
                { upsert: true }
            );
            return res.json({ success: true });
        } catch (e) {
            return res.status(500).json({ error: "Failed to update settings" });
        }
    }

    return res.status(405).json({ error: "Method not allowed" });
};
