/*CMD
  command: /start
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

Bot.sendInlineKeyboard(
  [
    [{ title: "💣 Play Minesweeper", command: "minesweeper" }],
    [{ title: "🃏 Play BlackJack", command: "bj" }],
    [{ title: "❌️⭕️ Play TicTacToe", command: "tictactoe" }],
    [{ title: "🧮 Calculator", command: "calculator" }],
    [{ title: "❤️ Secret Section", command: "secret" }]
  ],
  "🎉 Welcome to Mini Game Hub And The Calculator! 🎉"
)

