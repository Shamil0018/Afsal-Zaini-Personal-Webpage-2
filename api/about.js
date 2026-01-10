const { getClient } = require("./_mongodbClient");

module.exports = async (req, res) => {
    if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });

    try {
        const client = await getClient(process.env.MONGODB_URI);
        const col = client.db().collection("settings");
        const settings = await col.find().toArray();

        // Transform to easy object
        const content = {};
        settings.forEach(s => {
            content[s.type] = s.content;
        });

        res.json({ content });
    } catch (err) {
        console.error("SETTINGS FETCH ERROR:", err);
        res.status(500).json({ error: "Server error" });
    }
};
