const validate = (req, res, next) => {
    const { name, email, phone } = req.body;

    if (!name) return res.status(400).json({ error: "Missing name." });
    if (!email) return res.status(400).json({ error: "Missing email." });
    if (!phone) return res.status(400).json({ error: "Missing phone." });

    next();
};

module.exports = validate;