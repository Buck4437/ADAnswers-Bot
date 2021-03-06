"use strict";

const { ApplicationCommand } = require("../classes/ApplicationCommand/ApplicationCommand");

module.exports = {
  command: new ApplicationCommand({
    number: 7,
    name: "helpnumbers",
    description: "sends what each of the help pages has on it",
    check: "botCommandsCheck", 
    sent: [`Page 1 covers until break infinity
    Page 2 rest of infinity era + achievements and swipe trick
    Page 3 is eternity
    Page 4 dilation, reality, meta command, pins
    Page 5-6 some more common game info stuff
    Page 7 lore (5hours, justask, thanks,...and other miscellaneous bot functions)
    ||Page 69 is where the fun's at||`]
  })
};