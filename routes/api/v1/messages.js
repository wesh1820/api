var express = require('express');
var router = express.Router();

// Define the GET endpoint for "/"
router.get("/", (req, res, next) => {
    res.json({ 
        status: "success",
        message:  "GET messages",
        data: {
            "messages": []
        }
    });
});

module.exports = router;

