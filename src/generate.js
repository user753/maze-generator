var Maze = require('@sbj42/maze-generator-core').Maze;

function generate(width, height, options) {
    var noptions = {};
    for (var x in options)
        noptions[x] = options[x];

    // Default random number generator: Math.random.
    // Math.random isn't seedable, so if you want reproducible
    // results you should pass a different RNG, for instance
    // the following code using the random-js package would work:
    //
    //     var randomjs = require('random-js');
    //     var engine = randomjs.engines.mt19937().seed(seed);
    //     var real = randomjs.real(0, 1);
    //     options.random = function() {
    //         return real(engine);
    //     };
    if (!noptions.random)
        options.random = Math.random;

    var maze = new Maze(width, height);

    options.generator(maze, options);

    return maze;
}

module.exports = generate;
