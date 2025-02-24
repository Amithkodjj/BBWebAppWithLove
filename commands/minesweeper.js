/*CMD
  command: minesweeper
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var webExample = WebApp.getUrl({ command: "minesweeper" })
WebApp.render({
  template: "minesweeper.html"
})
Api.sendMessage({
  text: "MINESWEEPER GAME ✅️",

  reply_markup: {
    inline_keyboard: [
      // line 1
      [{ text: "PLAY THE GAME ❤️", web_app: { url: webExample } }]
    ]
  }
})

