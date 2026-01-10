const { getClient } = require("./_mongodbClient");

module.exports = async (req, res) => {
    if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });

    try {
        const client = await getClient(process.env.MONGODB_URI);
        const col = client.db().collection("courses");
        const courses = await col.find().sort({ createdAt: 1 }).toArray();
        res.json({ courses });
    } catch (err) {
        console.error("COURSES FETCH ERROR:", err);
        res.status(500).json({ error: "Server error" });
    }
};
