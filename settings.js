require("./all/module.js")

//========== Setting Owner ==========//
global.owner = "6283165503013"
global.namaowner = "𝗥𝗶𝘇𝗸𝘆 - 𝗛𝗼𝘀𝘁𝗶𝗻𝗴."
global.namaowner2 = "𝗥𝗶𝘇𝗸𝘆 - 𝗛𝗼𝘀𝘁𝗶𝗻𝗴"
//======== Setting Bot & Link ========//
global.namabot = "𝗥𝗶𝘇𝗸𝘆 - 𝗛𝗼𝘀𝘁𝗶𝗻𝗴" 
global.namabot2 = "𝗥𝗶𝘇𝗸𝘆 - 𝗛𝗼𝘀𝘁𝗶𝗻𝗴"
global.version = "v1.0"
global.foother = "Created By 𝗥𝗶𝘇𝗸𝘆 - 𝗛𝗼𝘀𝘁𝗶𝗻𝗴"
global.packname = "Created By 𝗥𝗶𝘇𝗸𝘆 - 𝗛𝗼𝘀𝘁𝗶𝗻𝗴"
global.author = "𝗥𝗶𝘇𝗸𝘆 - 𝗛𝗼𝘀𝘁𝗶𝗻𝗴"
//========== Setting Foto ===========//
global.imgreply = "https://telegra.ph/file/5c39303ea900cac7fb098.jpg"
global.imgmenu = fs.readFileSync("./media/Menu.jpg")
global.imgslide = "https://telegra.ph/file/5c39303ea900cac7fb098.jpg"
global.imgpanel = fs.readFileSync("./media/Panel.jpg")
//========== Jangan Di Ubah ==========//
const Apikey = "9Ij6sw8L1GNtOhExTbKq7WHFaMolCy"
//========= Setting Message =========//
global.msg = {
"error": "Error terjasi kesalahan",
"done": "Done Bang ✅", 
"wait": "⏳Memproses . . .", 
"group": "Command Ini Hanya Untuk Didalam Grup", 
"private": "Command Ini Hanya Untuk Di Private Chat", 
"admin": "Command Ini Hanya Untuk Admin Grup", 
"adminbot": "Command Ini Dapat Di Gunakan Ketika Bot Menjadi Admin", 
"owner": "Maaf Command Ini Hanya Untuk Owner Bot", 
"developer": "Command Ini Hanya Untuk Developer Bot!"
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})