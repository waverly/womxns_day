require("dotenv").config();

const express    = require("express");
const bodyParser = require("body-parser");
const Redis      = require("ioredis");
const cors       = require("cors");
const helmet     = require("helmet");
const util       = require("./util");

const app   = express();
const redis = new Redis();

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());

app.post("/addname", async (req, res) => {
  console.log("POST /addname");
    if (util.validateAddName(req)) {
        const {name} = req.body;
        const timestamp = Date.now();
        redis.zadd("names", timestamp, name.toLowerCase().trim())
            .then(ok => {
                res.status(200).json({status: "ok"});
            }).catch(notok => {
                res.status(500).json({error: "Cannot add the name to redis"});
            });
    } else {
        res.status(400).json({error: "Bad request, go away"});
    }
});

app.get("/names", (req, res) => {
  console.log("GET /names");
    redis.zrevrange("names", 0, -1)
        .then(result => {
            res.status(200).json({result});
        }).catch(error => {
            res.status(500).json({error: "Cannot get list of names from redis"});
        });
});

app.listen(process.env.PORT || 8080, () => {
    console.log(`Server is now listening on port ${process.env.PORT || 8080}`);
});
