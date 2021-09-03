"use strict"

const generator = require('./aisatana-markov');

module.exports = async (context, callback) => {
    const generated = generator.generate();
    return generated;
}
