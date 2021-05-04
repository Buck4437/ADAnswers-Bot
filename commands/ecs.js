/* eslint-disable max-len */
"use strict";

const { execute } = require("./challenge");

module.exports = {
  number: 5,
  name: "ecs",
  description: "shorthand for `++challenge ecs`",
  type: "shorthand",
  execute(message) {
    execute(message, ["ecs"], message.channel.id);
  }
};