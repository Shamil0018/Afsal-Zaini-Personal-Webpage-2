const { getClient } = require("../_mongodbClient");
const jwt = require("jsonwebtoken");
const { ObjectId } = require("mongodb");

function getToken(req) {
    const cookieHeader = req.headers.cookie || "";
    return cookieHeader
        .split(";")
        .map(x => x.trim())
        .find(x => x.startsWith("admin_token="))
        ?.split("=")[1];
}

module.exports = async (req, res) => {
    const token = getToken(req);
    if (!token) return res.status(401).json({ error: "Unauthorized" });

    try {
        jwt.verify(token, process.env.ADMIN_JWT_SECRET);
    } catch (e) {
        return res.status(401).json({ error: "Unauthorized" });
    }

    const client = await getClient(process.env.MONGODB_URI);
    const db = client.db();
    const col = db.collection("courses");

    if (req.method === "GET") {
        try {
            const courses = await col.find().toArray();
            return res.json({ courses });
        } catch (e) {
            return res.status(500).json({ error: "Database error" });
        }
    }

    if (req.method === "POST") {
        try {
            const { title, image, description, features } = req.body;
            const result = await col.insertOne({
                title,
                image,
                description,
                features,
                createdAt: new Date(),
            });
            return res.json({ success: true, id: result.insertedId });
        } catch (e) {
            return res.status(500).json({ error: "Failed to create course" });
        }
    }

    if (req.method === "PUT") {
        try {
            const { id, title, image, description, features } = req.body;
            await col.updateOne(
                { _id: new ObjectId(id) },
                {
                    $set: {
                        title,
                        image,
                        description,
                        features,
                        updatedAt: new Date(),
                    },
                }
            );
            return res.json({ success: true });
        } catch (e) {
            return res.status(500).json({ error: "Failed to update course" });
        }
    }

    if (req.method === "DELETE") {
        try {
            const { id } = req.query;
            await col.deleteOne({ _id: new ObjectId(id) });
            return res.json({ success: true });
        } catch (e) {
            return res.status(500).json({ error: "Failed to delete course" });
        }
    }

    return res.status(405).json({ error: "Method not allowed" });
};
