const { events } = require("brigadier")

events.on("exec", () => {
  console.log("Hello from brig!")
})
