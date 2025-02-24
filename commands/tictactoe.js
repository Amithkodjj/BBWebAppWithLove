/*CMD
  command: tictactoe
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

var webExample = WebApp.getUrl({ command: "tictactoe" })
WebApp.render({
  template: "TicTacToe.html"
})
Api.sendMessage({
  text: "TICTACTOE GAME ✅️",

  reply_markup: {
    inline_keyboard: [
      // line 1
      [{ text: "PLAY THE GAME ❤️", web_app: { url: webExample } }]
    ]
  }
})

