const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "SENU-MD-V1AtBh2QRA#tUWuz1OpOv3aJWxMqvJej_WIW7nh71HOp5cslSY-VOc",
  MONGODB: process.env.MONGODB || "mongodb://mongo:opZoxyRXmtsolWSLkejYSnPealRPQkia@yamabiko.proxy.rlwy.net:22620",
  OWNER_NUM: process.env.OWNER_NUM || "94743008953",
};
