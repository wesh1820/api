var express = require('express');
var router = express.Router();

// Define the GET endpoint for "/"
router.get("/", (req, res, next) => {
    res.status(200).json({ 
        status: "success",
        message:  "GETTING messages",
        data: {
            "messages": [
                {
                    "user": "user",
                    "message": "Hello"
                },
                {
                    "user": "Jane",
                    "message": "Hi"
                }
            ]
        }
    });
});
router.get("/:id", (req, res, next) => {
    res.status(200).json({ 
        status: "success",
        message:  "GETTING message 1",
        data: {
            "message": {
                "user": "John",
                "message": "Hello"
            }
        }
    });
}
);
router.post("/", (req, res, next) => {
    res.status(200).json({ 
        status: "success",
        message:  "Message saved",
        data: {
            "message": {
                "user": "Pikachu",
                "text": "Hi, I'm a message",
                "_id": "66faB85b6ad5aaee2d047fa28",
                "__v":0
                
            }
        }
    });
}
);

router.put("/:id", (req, res, next) => {
    res.status(200).json({
        status: "success",
        message: "message updated",
        data: {
            "message": {
                "user": "Pikachu",
                "text": "Hi, I'm a message",
                "_id": "66faB85b6ad5aaee2d047fa28",
                "__v":0
            }
        }
    });
}
);

router.put("/:id", (req, res, next) => {
    res.status(200).json({
        status: "success",
        message: "message updated",
        data: {
            "message": {
                "_id": "66faB85b6ad5aaee2d047fa28"            
            }
        }
    });
}
);

router.get("/:user", (req, res, next) => {
    res.status(200).json({
        status: "success",
        message: "GET message",
        data: {
            "messages": [
                {
                    "user": "Pikachu",
                "text": "Hi, I'm a message",
                "_id": "66faB85b6ad5aaee2d047fa28",

                },
                {
                    "user": "Pikachu",
                    "text": "Hi, I'm another message",
                    "_id": "qsd4f56sdf456ds4f56dsf4",
                }
            ]
        }
    });
}
);
module.exports = router;