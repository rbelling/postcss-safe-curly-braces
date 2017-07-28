const postcss = require('postcss');

module.exports = postcss.plugin('postcss-space-between-rules', function (opts) {
    opts = opts || {};

    // Work with options here
    return function (root, result) {
        root.walkRules(function (rule) {
            rule.after('{}');
            console.log(rule);
        });
    };
});
