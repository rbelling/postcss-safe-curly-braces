const plugin = require('postcss').plugin;
const RULE_SEPARATOR = ' ';

module.exports = plugin('postcss-safe-curly-braces', () => {
    // Avoid back-to-back closed curly braces, that might break certain templating engines like Handlebars or Vue
    return function (root) {
        root.walkAtRules((atRule) => {
            if (!atRule.raws.after.match(/^(\n|\s)/)) {
                // If the atRule isn't preceded by a space, a tab or a newline,
                // then prepend our `RULE_SEPARATOR` to it.
                atRule.raws.after = `${RULE_SEPARATOR}${atRule.raws.after}`;
            }
        });
    };
});
