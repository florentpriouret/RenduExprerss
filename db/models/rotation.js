const {Schema, model} = require('mongoose');

const schema = new Schema({
    maxNewPlayerLevel: {
        type: Number,
        required: true,
        unique: true,
    },
    freeChampionIdsForNewsPlayers: {
        arrayOfNumber: {
                type: [Number],
            },
    },
    freeChampionIds: {
        arrayOfNumber: {
            type: [Number],
        },
    }
});

module.exports = model('Rotation', schema);
