import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

// Owner
global.owner = [
['6285338324402', 'Xyroinee', true]
]
global.mods = []
global.prems = []
// Info
global.nomorwa = '16013019274'
global.packname = 'ig: @saya_wiki'
global.author = 'Wiki W'
global.namebot = '​Bot W'
global.wm = 'ig: @saya_wiki'
global.stickpack = 'ig: @saya_wiki'
global.stickauth = 'ig: @saya_wiki'
global.fotonya = 'https://telegra.ph/file/de9a248b7ac5e34c2a98b.jpg'
// Link Sosmed
global.sig = 'https://www.instagram.com/saya_wiki'
global.sgh = 'https://github.com/Xyroinee'
global.sgc = 'https://chat.whatsapp.com/'
// Donasi
global.psaweria = 'https://saweria.co/saya_wiki'
global.ptrakterr = 'https://trakteer.id'
global.povo = '-'
// Info Wait
global.wait = 'Sedang Di Proses, Mohon Tunggu....'
global.eror = 'Terjadi Kesalahan Coba Lagi Nanti!'
global.multiplier = 69 
// Apikey
global.lol = 'apikeymu'
global.rose = 'apikeymu'
global.xyro = 'apikeymu'
// Catatan : Jika Mau Work Fiturnya
// Masukan Apikeymu
// Gapunya Apikey? Ya Daftar
// Website: https://api.xyroinee.xyz
// Daftar Ke Website Tersebut Untuk
// Mendapatkan Apikey Kamu
global.APIs = {
    xyro: "https://api.xyroinee.xyz",
    popcat : 'https://api.popcat.xyz'
}

/Apikey/
global.APIKeys = {
    "https://api.xyroinee.xyz": "apikeymu",
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
})

