// Middleware for API key validation
const validateAPIKey = (req, res, next) => {
    const providedAPIKey = req.headers['api-key']; // Assuming API key is provided in the header
    const expectedAPIKey = process.env.API_KEY; // Fetch the expected API key from environment variables

    if (!providedAPIKey || providedAPIKey !== expectedAPIKey) {
        console.log(providedAPIKey)
        return res.status(401).json({ message: "Unauthorized: Invalid API key" });
    }
    next();
};

module.exports=validateAPIKey;