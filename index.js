const plugin = require('postcss').plugin;
const RULE_SEPARATOR = ' ';

module.exports = plugin('postcss-safe-curly-braces', () => {
  // Avoid back-to-back closed curly braces, that might break certain template engines like Handlebars or Vue
  return function (root) {
    root.walkAtRules((atRule) => {
      if (!atRule.raws.after.match(/^(\n|\s)/)) {
        // If the closing curly brace of an atRule isn't already preceded by a space, a tab or a newline,
        // then prepend `RULE_SEPARATOR` to the curly brace.
        atRule.raws.after = `${RULE_SEPARATOR}${atRule.raws.after}`;
      }
    });
  };
});
