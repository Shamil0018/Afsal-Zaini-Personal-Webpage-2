const { getClient } = require("./_mongodbClient");

module.exports = async (req, res) => {
    if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });

    try {
        const client = await getClient(process.env.MONGODB_URI);
        const col = client.db().collection("events");
        const events = await col.find().sort({ createdAt: -1 }).toArray();
        res.json({ events });
    } catch (err) {
        console.error("EVENTS FETCH ERROR:", err);
        res.status(500).json({ error: "Server error" });
    }
};
