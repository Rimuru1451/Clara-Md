import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

// Owner
global.owner = [
['62887435530429', 'Ayangnya HuTao', true]
] 
global.mods = []
global.prems = []
// Info
global.nomorwa = '62887435530429'
global.packname = 'Kobo - MD by'
global.author = '© Ayangnya HuTao '
global.namebot = 'Kobo - MD'
global.wm = '© Kobo By Ayangnya HuTao'
global.stickpack = 'Kobo - MD by'
global.stickauth = '© Ayangnya HuTao'
// Link Sosmed
global.sig = 'https://shoplinks.to/vyna-store'
global.sgh = 'https://github.com/Rimuru1451'
global.sgc = 'https://chat.whatsapp.com/H7ls7IWtzlt9g8yKAh8XMt'
// Donasi
global.psaweria = 'https://shoplinks.to/vyna-store'
global.ptrakterr = 'https://shoplinks.to/vyna-store'
global.povo = '0882-0200-39619'
// Info Wait
global.wait = '_Sedang Di Proses, Mohon Tunggu_....'
global.eror = 'Terjadi Kesalahan Coba Lagi Nanti!'
global.multiplier = 69 
// Apikey
global.xyro = 'xCOpP5f36W'
// Catatan : Jika Mau Work Fiturnya
// Masukan Apikeymu
// Gapunya Apikey? Ya Daftar
// Website: https://api.xyroinee.xyz
// Daftar Ke Website Tersebut Untuk
// Mendapatkan Apikey Kamu
global.APIs = {
    xyro: "https://api.xyroinee.xyz",
}

/*Apikey*/
global.APIKeys = {
    "https://api.xyroinee.xyz": "xCOpP5f36W",
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})