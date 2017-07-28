const postcss = require('postcss');

const plugin = require('./');

function run(input, output, opts) {
    return postcss([ plugin(opts) ]).process(input)
        .then(result => {
            expect(result.css).toEqual(output);
            expect(result.warnings().length).toBe(0);
        });
}

it('Should add a white space before the end of an AtRule, unless it is spaced already', () => {
    const src =     '@media(hover:hover){c{color: green;}}\n@media(hover:coarse){b{color: red;}   }@media(hover:coarse){d{color: blue;}\n}@media(hover:none){f{color: teal;} }';
    const target =  '@media(hover:hover){c{color: green;} }\n@media(hover:coarse){b{color: red;}   }@media(hover:coarse){d{color: blue;}\n}@media(hover:none){f{color: teal;} }'
    return run(src, target, {});
});
