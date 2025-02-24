/*CMD
  command: calculator
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

var webExample = WebApp.getUrl({ command: "calculator" })
WebApp.render({
  template: "calculator.html"
})
Api.sendMessage({
  text: "CALCUALTOR ✅️",

  reply_markup: {
    inline_keyboard: [
      // line 1
      [{ text: "TRY IT OUT ❤️", web_app: { url: webExample } }]
    ]
  }
})

