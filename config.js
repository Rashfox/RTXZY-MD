global.owner = ['6285742916900']  
global.mods = ['6285742916900'] 
global.prems = ['6285742916900']
global.nameowner = 'Rash'
global.numberowner = '6285742916900' 
global.mail = 'admin@rizki-rash.my.id' 
global.gc = 'https://chat.whatsapp.com/H2VXhR1S8wX50tUteEkKgf'
global.instagram = 'https://instagram.com/niothedemon'
global.wm = '© Rash'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Rash'
global.author = ''
global.maxwarn = '5' // Peringatan maksimum Warn

global.autobio = false // Set true/false untuk mengaktifkan atau mematikan autobio (default: false)
global.antiporn = false // Set true/false untuk Auto delete pesan porno (bot harus admin) (default: false)
global.spam = false // Set true/false untuk anti spam (default: false)
global.gcspam = false // Set true/false untuk menutup grup ketika spam (default: false)
    

// APIKEY INI WAJIB DI ISI! //
global.btc = 'bwBXZD2B'  
//Daftar terlebih dahulu https://api.botcahx.eu.org



// INI HANYA OPTIONAL SAJA BOLEH DI ISI BOLEH JUGA ENGGA //
global.lann = 'N53cGeUf'
//Daftar https://api.betabotz.eu.org 

//Gausah diganti atau di ubah
global.APIs = {   
  btc: 'https://api.botcahx.eu.org'
}

//Gausah diganti atau di ubah
global.APIKeys = { 
  'https://api.botcahx.eu.org': global.btc
}


let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
