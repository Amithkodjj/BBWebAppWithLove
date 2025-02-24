/*CMD
  command: bj
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

var webExample = WebApp.getUrl({ command: "bj" })
WebApp.render({
  template: "blackjack.html"
})
Api.sendMessage({
  text: "BLACKJACK GAME ✅️",

  reply_markup: {
    inline_keyboard: [
      // line 1
      [{ text: "PLAY THE GAME ❤️", web_app: { url: webExample } }]
    ]
  }
})

