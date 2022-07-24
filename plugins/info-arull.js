let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭═══════════════════════
║╭──❉ 〔 INFO OWNER 〕 ❉────── 
║│➸ ```NAMA``` : Hz22
║│➸ ```UMUR``` : 18thn
║│➸ ```ASAL``` : JAWA TENGAH
║│➸ ```OFFICIAL GRUP``` :
https://chat.whatsapp.com/BiNW2fsXbIJJOj5yHq6KHz
║│➸ ```INSTAGRAM``` : http://instagram.com/hz22yt
║│➸ ```WHATSAPP``` : http://wa.me/6281228391267
╰────────❉
`.trim(), m)
}

handler.help = ['infohz22']
handler.tags = ['main', 'utama']
handler.command = /^(infohz22|infoowner$/i

handler.exp = 150

module.exports = handler
