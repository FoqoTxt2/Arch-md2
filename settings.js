/* 

   255788925545
  
*/

const fs = require('fs');
const chalk = require('chalk');
const { version } = require("./package.json")


//======= Change settings =======\\
global.owner = "255788925545"
global.botname = "Professor Txt"
global.ownername = "" //set bot owner name here 
global.simbol = "♘"
global.typeMenu = 'v1' // choose between 1,2,3
global.prefix = '.' // your desired prefix symbol only
global.channel = ''
global.timezone = 'Africa/Lagos'
global.author = 'Professor'
global.packname = 'Professor ²⁵'

global.tempatDB = 'database.json' // dont change might cause big errors 
global.pairing_code = false // if deploying on panel set true if on any other platform leave it false
global.startup = true

// Settings Image Url
global.image = {
menu: "", 
reply: "", 
}

// Message Command 
global.mess = {
	owner: "*Access Denied* This feature is for bot owners only!",
	admin: "*Access Denied* This feature is for group admins only!!",
	botAdmin: "*Access Denied* This feature is only for when the bot is an admin.!",
	group: "*Access Denied* This feature is for groups only!",
	private: "*Access Denied* This feature is for private chat only!!",
	ban: "*Access Denied* you have been banned contact owner to unban!!",
	wait: 'Loading...',
	error: 'Error!',
	done: 'Done'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
