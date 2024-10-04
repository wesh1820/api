var express = require('express');
var router = express.Router();

// Define the GET endpoint for "/"
router.get("/", (req, res, next) => {
    res.status(200).json({ 
        status: "success",
        message: "GET messages",
        data: [
            {
                id: 1,
                user: "user1",
                message: "Hello, this is a test message."
            },
            {
                id: 2,
                user: "user2",
                message: "Another test message."
            },
            {
                id: 3,
                user: "user3",
                message: "Yet another message."
            }
        ]
    });
});


module.exports = router;

