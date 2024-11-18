//#ENJOY BRO😍
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Kermd237@gmail.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://Rayan:<Emmanuel237>@cluster0.8twd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Kgtech-cmr/KERM_MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.devs = "https://wa.me/237650564445 , https://wa.me/237656520674";
global.sudo = process.env.SUDO || "237650564445";
global.owner = process.env.OWNER_NUMBER || "31254/15";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/kbc224.mp4,https://files.catbox.moe/dhii42.mp4,https://files.catbox.moe/lgj91g.mp4,https://files.catbox.moe/hvjoe6.mp4,https://files.catbox.moe/4ogeum.mp4,https://files.catbox.moe/0cmaxl.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kgtech-v2-session.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUxmT3hvZ2ZobkJzckVlTVhFZzJ4RGMzV3hFaG11cXlud3lyUVVibzZYYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicHJ0ak5FRFJtcU93SHZDQitmMm1HS3pYYlVlSTlLTk9HVHNEU2N1K0wyaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyRnA2QWlVN3Z0Wm1vK05qY3ZnVjZhNzlZVm5zMlM0cmZWc1hKSDd2VTB3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwRTRXTHAyeHFCbVZSWmpiOG8zL0RPWDZRMVJpK2E1YW9Pam5hcW50MmlnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNQSklDeW1ueEtBUFpYWEVWcHFlRlN2eUtsWjRXeTE4ZzFFTFN1dnluVlU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZxV0FFRlVNSkJtV0p6ZnMxQ25Bb3JZWDBZS05YZnRqTlU5cFdBYXVrQ2s9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUlqSC9ZQjl4SXpKSFhtZWRyRHJ1SzRWeVhPR3Rub3VXYkU2UmlVWGdXZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiazUvRjBLWk5QS3R1VnVSZnJJYVNqYXp5aEY0WmtzdTJtb3JqcFpaZExGWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijh5NHk4UVRjcUhOcG41bnM4a2dKQ3l2TENGQ2xOdTFaRWpFUzNaRzdyYm4yRVVmNE5zaVM5TGFERUw4NXFYZ2pHTXRzZDlHL2JETUt0U3NDbFVrdkRBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjYsImFkdlNlY3JldEtleSI6IjEvZnpkcHFXaGdXM3RlU283WnJyejRPemRoYXdGajRpdHgwb2x2R1FuQnc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImczQnlneURuU3ZpTjcyaVlxdjcteWciLCJwaG9uZUlkIjoiMjZmZDFmZTAtMzQzNy00MmQ1LTgwZWYtNTFiMThhMzY5NjEwIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNDNUlNRmYxdTBReFlCbE9iWkxqbzFMMGhEZz0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVlBLczJHTlhUV1k4aWZkbEdIMlowMWozeDhnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSUdsM2RVQkVMdTk3cmtHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoicGdpWEU3VU5DU0dEN2hqWGNkODNMT1BzamFvOXJNSUdWYkZsZHFxeklpZz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiUmpqRTQzUmE3SkhheUQ0K1pDcGZsZTdhdVFHV0ZKemE3TlRLSU5HM1loaGN4cXJQSHRYbmFadit0MnIyUjNxaC96NG1OVDVnejdZMnR6MkxwUmpWalE9PSIsImRldmljZVNpZ25hdHVyZSI6IjFhOVZBcGpzL0Y2aDRkUjJZRjRnZ29xellBaVg3WDk0V0Z5RklGSDUrUWxjYzkzRVQwdXBRMzBpZWVQYWpLQUtaVWVUd215WUlCUVI1TEVyZzNTckRRPT0ifSwibWUiOnsiaWQiOiI1MDk0MDk4MzY0Njo1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ikltw7h0ZXAiLCJsaWQiOiI0OTM4ODMxNTQ5NjY2ODo1QGxpZCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI1MDk0MDk4MzY0Njo1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmFZSWx4TzFEUWtoZys0WTEzSGZOeXpqN0kycVBhekNCbFd4WlhhcXN5SW8ifX1dLCJwbGF0Zm9ybSI6InNtYmkiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lCUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMTk2MDUyMCwibGFzdFByb3BIYXNoIjoiMm92cXl5In0=
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || "?",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜ KG TECH⌝☜`",
  author: process.env.PACK_AUTHER || "KG TECH",
  packname: process.env.PACK_NAME || "Kerm-MD-V2",
  botname: process.env.BOT_NAME || "ᵏᵍ┘𝙺𝙴𝚁𝙼_𝙼𝙳_𝚅𝟸𖤐",
  ownername: process.env.OWNER_NAME || "☞⌜ KG TECH⌝☜",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "KERM").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
