let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kontol = `
╭─────[ *STORE BOT* ]─────✧
┴
│ *STORE Hz22Botz*
┬
╰──────────···`.trim()
  const button = {
        buttonText: '🛒STORE Hz22Botz 🛒',
        description: kontol,
        sections:  [{title: "STORE Hz22Botz", rows: [
        {title: 'Menu utama', description: "Kembali ke Menu Utama", rowId:".?"},
        {title: 'Sewa satbotsss', description: "Sewa bot dengan memasukkan bot ke grup kamu", rowId:",
        {title: 'RULES', description: "rules Hz22Botz", rowId:".rules"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}

handler.tags = ['main', 'update']
handler.command = /^(iklan|sponsor)$/i
handler.help = ['rules']
module.exports = handler
