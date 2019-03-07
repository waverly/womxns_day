require("dotenv").config();
/*
   Your certificate and chain have been saved at:
   /etc/letsencrypt/live/womxns.api.nkla-dev.com/fullchain.pem
   Your key file has been saved at:
   /etc/letsencrypt/live/womxns.api.nkla-dev.com/privkey.pem
 */

const express    = require("express");
const bodyParser = require("body-parser");
const Redis      = require("ioredis");
const cors       = require("cors");
const helmet     = require("helmet");
const util       = require("./util");

const fs = require('fs');
const http = require('http');
const https = require('https');

const privateKey = fs.readFileSync('/etc/letsencrypt/live/womxns.api.nkla-dev.com/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/womxns.api.nkla-dev.com/fullchain.pem', 'utf8');

const options = {
  key : privateKey,
  cert : certificate
};


const app   = express();
const redis = new Redis();

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(express.static(__dirname, { dotfiles: 'allow' } ));

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

/* app.listen(process.env.PORT || 8080, () => {
    console.log(`Server is now listening on port ${process.env.PORT || 8080}`);
}); */
const port = process.env.PORT || 8080;
const server = https.createServer(options, app).listen(port, () => {
  console.log("Express server listening on port " + port);
});
