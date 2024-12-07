/*BASE ORI : Skyzo
# TAMBAHKAN FITUR OLEH "RIZKY"
# ERROR DI FIXX OLEH "RIZKY"
# RENAME/RECODE OLEH "RIZKY"
# Hapus Sumber Utama Semoga Yatim Piatu + 7 Keturunan 
# Yang Jual Script Semoga Yatim Piatu
TERIMAKASIH ATAS TELAH SUPPORT SEMUA NYA 🙏*/


module.exports = async (Rizky, m, store) => {
try {
const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''

//========== DATABASE ===========//
const antibot = JSON.parse(fs.readFileSync('./all/database/antibot.json'))
const antilink = JSON.parse(fs.readFileSync('./all/database/antilink.json'))
const antilink2 = JSON.parse(fs.readFileSync('./all/database/antilink2.json'))
const welcome = JSON.parse(fs.readFileSync('./all/database/welcome.json'))
const contacts = JSON.parse(fs.readFileSync("./all/database/contacts.json"))
const premium = JSON.parse(fs.readFileSync("./all/database/premium.json"))
const owner2 = JSON.parse(fs.readFileSync("./all/database/owner.json"))
const isPremium = premium.includes(m.sender)

//========= CONFIGURASI ==========//
const budy = (typeof m.text == 'string' ? m.text : '')
const isOwner = owner2.includes(m.sender) ? true : m.sender == owner+"@s.whatsapp.net" ? true : m.fromMe ? true : false
const prefix = '.'
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ""
const cmd = prefix + command
const args = body.trim().split(/ +/).slice(1)
var crypto = require("crypto")
var { post } = (await import("axios")), search = (await import("yt-search"));
let { randomBytes } = require("crypto")
const yts = require("yt-search")
const makeid = randomBytes(3).toString('hex')
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const axios = require("axios");
const { Client } = require('ssh2');
const text = q = args.join(" ")
const botNumber = await Rizky.decodeJid(Rizky.user.id)
const isGroup = m.chat.endsWith('@g.us')
const senderNumber = m.sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const groupMetadata = m.isGroup ? await Rizky.groupMetadata(m.chat).catch(e => {}) : {}
let participant_bot = m.isGroup ? groupMetadata?.participants.find((v) => v.id == botNumber) : {}
let participant_sender = m.isGroup ? groupMetadata?.participants.find((v) => v.id == m.sender) : {}
const isBotAdmin = participant_bot?.admin !== null ? true : false
const isAdmin = participant_sender?.admin !== null ? true : false
const { generateWAMessageFromContent, prepareWAMessageMedia, proto, delay } = require("@whiskeysockets/baileys");
const { runtime, getRandom, getTime, tanggal, toRupiah, telegraPh, ucapan, generateProfilePicture, getBuffer, fetchJson, resize } = require('./all/function.js')
const { toAudio, toPTT, toVideo, ffmpeg } = require("./all/converter.js")
const {Apikey} = require("./settings")

//=========== MESSAGE ===========//
if (isCmd) {
console.log(chalk.yellow.bgCyan.bold(namabot), color(`[ PESAN ]`, `blue`), color(`FROM`, `blue`), color(`${senderNumber}`, `blue`), color(`Text :`, `blue`), color(`${cmd}`, `white`))
}
//========= FAKE QUOTED =========//
const qbug = {key: {remoteJid: 'status@broadcast', fromMe: false, participant: '0@s.whatsapp.net'}, message: {
viewOnceMessage: {
message: {
listResponseMessage: {title: `https://skyzo.dev`, text: "Hellooo", "buttonText": "Open list button text here", "sections": [{ "title": "Section 1", "rows": [{ "title": "Option1", "rowId": "s1r1", "description": "some description (optional)" }]}]
}
}}
}}

const qtext = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "0@s.whatsapp.net"} : {}) },'message': {extendedTextMessage: {text: "Thank you for using my services"}}}

const qtext2 = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "0@s.whatsapp.net"} : {}) },'message': {extendedTextMessage: {text: "© SkyBotz Version 4"}}}

const qcall = {
key: {
participant: "0@s.whatsapp.net",
...(m.chat ? {
remoteJid: `status@broadcast`
} : {})
},
'message': {
  "eventMessage": {
    "isCanceled": false,
    "name": `${namabot} Project`,
    "description": "Pe",
    "location": {
      "degreesLatitude": 0,
      "degreesLongitude": 0,
      "name": "Apakajajanabs"
    },
    "joinLink": "https://call.whatsapp.com/video/hMwVijMQtUb0qBJL3lf0rv",
    "startTime": "1713724680"
  }
}
}

const qpayment = {
key: {
remoteJid: '0@s.whatsapp.net',
fromMe: false,
id: `ownername`,
participant: '0@s.whatsapp.net'
},
message: {
requestPaymentMessage: {
currencyCodeIso4217: "IDR",
amount1000: 999999999,
requestFrom: '0@s.whatsapp.net',
noteMessage: {
extendedTextMessage: {
text: namabot
}},
expiryTimestamp: 999999999,
amount: {
value: 91929291929,
offset: 1000,
currencyCode: "INR"
}}}}

const qchanel = {
key: {
remoteJid: 'status@broadcast',
fromMe: false,
participant: '0@s.whatsapp.net'
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: `120363224727390375@newsletter`,
newsletterName: `Hore`,
jpegThumbnail: "",
caption: `Powered By ${namaowner2} 🇵🇸`,
inviteExpiration: Date.now() + 1814400000
}
}}

const qtoko = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
}, message: {
"productMessage": {
"product": {
"productImage": {
"mimetype": "image/jpeg",
"jpegThumbnail": "",
},
"title": `${namaowner2} - Marketplace`,
"description": null,
"currencyCode": "IDR",
"priceAmount1000": "999999999999999",
"retailerId": `Powered By Rizky`,
"productImageCount": 1
},
"businessOwnerJid": `0@s.whatsapp.net`
}}
}

const downloadMp3 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
ytdl(Link, { filter: 'audioonly' }).pipe(fs.createWriteStream(mp3File)).on('finish', async () => {
await alicia.sendMessage(m.chat, { audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' }, { quoted: m })
fs.unlinkSync(`./${mp3File}`)
})
} catch (err) {
alreply(`${err}`)
}
}

const downloadMp4 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp4File = getRandom('.mp4')
let nana = ytdl(Link).pipe(fs.createWriteStream(mp4File)).on('finish', async () => {
await alicia.sendMessage(m.chat, { video: fs.readFileSync(mp4File), gifPlayback: false }, { quoted: m })
fs.unlinkSync(`./${mp4File}`)
})
} catch (err) {
alreply(`${err}`)
}
}

const totalFitur = () =>{
var mytext = fs.readFileSync("./RizkyHosting.js").toString()
var numUpper = (mytext.match(/case '/g) || []).length;
return numUpper
}

//========== FUNCTION ===========//
let ppuser
try {
ppuser = await Rizky.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://telegra.ph/file/a059a6a734ed202c879d3.jpg'
}

function generateRandomPassword() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ81';
  const length = 10;
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}

//========= SETTING EVENT ========//

if (antilink2.includes(m.chat)) {
if (!isBotAdmin) return
if (!isAdmin && !isOwner && !m.fromMe) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text)) {
var gclink = (`https://chat.whatsapp.com/` + await Rizky.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await Rizky.sendMessage(m.chat, {text: `@${m.sender.split("@")[0]} Maaf Pesan Kamu Saya Hapus Karna Admin/Owner Bot Menyalakan Fitur *Antilink* Grup Lain!`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {thumbnailUrl: ppuser, title: "乂 Link Grup Terdeteksi", body: "Powered By "+namabot, previewType: "PHOTO"}}}, {quoted: m})
await Rizky.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
}
}}



switch (command) {
case "menu": {
let teksmenu = `┌──── 「  𝗜𝗡𝗙𝗢 𝗕𝗢𝗧 𝗠𝗘𝗡𝗨 」
│ ❍︎ Selamat : *${ucapan()}*
│ ❍︎ Haii Kak : @${m.sender.split("@")[0]}!
│ ❍︎ Botname : *${global.namabot}*
│ ❍︎ Uptime : *${runtime(process.uptime())}*
│ ❍︎ Version : *${global.version}*
│ ❍︎ Total Feature : *${totalFitur()}*
└─────────────────────┈ ⳹

┌──── 「 𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨 」
│ ❍︎ .getlayanan *Untuk Melihat ID Nokos & Harga Nokos*
│ ❍︎ .nokos *Untuk Membeli Nokos*
│ ❍︎ .kode *Untuk Mengecek Kode Nokos*
│ ❍︎ .batal *Untuk Membatalkan Nokos Atau Transaksi*
└─────────────────────┈ ⳹`
Rizky.sendMessage(m.chat, {text: `${teksmenu}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {
thumbnail: fs.readFileSync("./media/Menu.jpg"), title: `© ${global.namabot} - ${global.version}`, body: `Runtime : ${runtime(process.uptime())}`,  sourceUrl: global.linkyt, previewType: "PHOTO"}}}, {quoted: qchanel})
}
break
case "getlayanan": {
if (!q) return m.reply(`Masukan Negara Yang Ingin Di Cari`)
var config = await fetchJson('https://virtusim.com/api/json.php?api_key=' + Apikey + '&action=services&country=' + q)
let teks = `*⚡ BERIKUT LIST HARGA & LAYANAN YANG TERSEDIA ⚡*\n\n`
try {
if (config.data.status == false) return m.reply("Jika Ada Kendala Mohon Lapor Kan Ke Admin")
for (let r of config.data) {
teks +=`*🔑 ID :* ${r.id}\n*♦️ APLIKASI :* ${r.name}\n*💰 HARGA :* ${r.price}\n*📦 STOCK :* ${r.tersedia}\n\n`
}
m.reply(teks)
} catch (error) {
console.error('Error:',error);
m.reply(JSON.stringify(error, null, '\t'));
}
}
break
case "nokos": {
if (!q) return m.reply(`Masukan ID Layanan Nokos`)
var cekhar = await fetchJson('https://virtusim.com/api/json.php?api_key=' + Apikey + '&action=services&country=')
let x = false
Object.keys(cekhar.data).forEach((i) => {
if (cekhar.data[i].id == q){x = i}
})
const pricee = cekhar.data[x].price
const axios = require("axios");
var config = {
method: 'POST',
url: 'https://virtusim.com/api/json.php?api_key=' + Apikey + '&action=order&service=' + q + '&operator=any'
}
axios(config)
.then(function (response) {
if (response.data.status == false) return m.reply(JSON.stringify(response.data.data.msg, null, '\t'));
if (response.data.status == true) {
m.reply(`*BERIKUT NOKOS ${response.data.data.service_name} ANDA*
    
* *ID Transaksi :* ${response.data.data.id}
* *Nomor Nokos :* ${response.data.data.number}
* *Operator/Kartu :* ${response.data.data.operator}
* *ID Aplikasi :* ${response.data.data.service_id}
* *Nama Aplikasi :* ${response.data.data.service_name}
* *Harga : Rp* ${pricee}

* Untuk Nomor Keblokir/Ban Silahkan Ketik .batal
* Untuk Mengecek Kode Sms Silahkan Ketik .kode ${response.data.data.id}
* Untuk Kode Tidak Masuk Silahkan Ketik .batal ${response.data.data.id}`)
}
})
.catch(function (error) {
console.error('Error:', error);
m.reply(JSON.stringify(error, null, '\t'));
});
}
break
case 'kode': {
if (!q) return m.reply(`Masukan ID Transaksi Nokos Anda`)
const axios = require("axios");
var config = {
method: 'GET',
url: 'https://virtusim.com/api/json.php?api_key=' + Apikey + '&action=status&id=' + q
}
axios(config)
.then(function (response) {
if (response.data.status == false) return reply(JSON.stringify(response.data.data.msg, null, '\t'));
if (response.data.status == true) {
m.reply(`*BERIKUT STATUS NOKOS ANDA*
    
* *ID Transaksi :* ${response.data.data.id}
* *Nomor Nokos :* ${response.data.data.number}
* *Status Nokos :* ${response.data.data.status}
* *Kode Nokos :* ${response.data.data.sms}
* *Nama Aplikasi :* ${response.data.data.service_name}

* Untuk Kode Lebih Dari 5 Menit Silahkan Ketik .batal ${response.data.data.id}`)
}
})
.catch(function (error) {
console.error('Error:', error);
m.reply(JSON.stringify(error, null, '\t'));
});
}
break
case 'batal': {
if (!q) return reply(`Masukan ID Transaksi Nokos Anda`)
var cekser = await fetchJson('https://otpku.com/api/json.php?api_key=' + apikeyOtpKu + '&action=services&country=')
const axios = require("axios");
var config = {
method: 'GET',
url: 'https://virtusim.com/api/json.php?api_key=' + Apikey+ '&action=set_status&id=' + q + '&status=2'
}
axios(config)
.then(function (response) {
if (response.data.status == false) return reply(`*BERIKUT DETAIL TRANSAKSI NOKOS ANDA*

* *Pesan :* ${response.data.msg}
* *ID Transaksi :* ${response.data.data.id}
* *Nama Aplikasi :* ${response.data.data.service_name}`)
}
)
.catch(function (error) {
console.error('Error:', error);
m.reply(JSON.stringify(error, null, '\t'));
});
}
break
default:
if (budy.startsWith('$')) {
if (!isOwner) return
exec(budy.slice(2), (err, stdout) => {
if(err) return Rizky.sendMessage(m.chat, {text: err.toString()}, {quoted: m})
if (stdout) return Rizky.sendMessage(m.chat, {text: util.format(stdout)}, {quoted: m})
})}

if (budy.startsWith(">")) {
if (!isOwner) return
try {
let evaled = await eval(text)
if (typeof evaled !== 'string') evaled = util.inspect(evaled)
Rizky.sendMessage(m.chat, {text: util.format(evaled)}, {quoted: m})
} catch (e) {
Rizky.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}

if (budy.startsWith("=>")) {
if (!isOwner) return
try {
const evaling = await eval(`;(async () => { ${text} })();`);
return Rizky.sendMessage(m.chat, {text: util.format(evaling)}, {quoted: m})
} catch (e) {
return Rizky.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}

}} catch (e) {
console.log(e)
Rizky.sendMessage(`${owner}@s.whatsapp.net`, {text:`${util.format(e)}

Command From : ${m.sender.split("@")[0]}`}, {quoted: m})
}}

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})