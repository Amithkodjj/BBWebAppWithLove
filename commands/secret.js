/*CMD
  command: secret
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

var webExample = WebApp.getUrl({ command: "secret" })
WebApp.render({
  template: "secret.html"
})
Api.sendMessage({
  text: "Love the secret",

  reply_markup: {
    inline_keyboard: [
      // line 1
      [{ text: "❤️", web_app: { url: webExample } }]
    ]
  }
})

