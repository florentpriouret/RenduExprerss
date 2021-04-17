const BaseRiotClient = require('./base-riot-client');
const {AxiosResponse} = require('axios');

/**
 * A typedef documentation to describe object return by Riot's API => autocompletion in our code.
 * @typedef {Object} RiotRotation
 * @property {int} maxNewPlayerLevel
 * @property {int[]} freeChampionIdsForNewsPlayers
 * @property {int[]} freeChampionIds
 */



class RiotRotationClient extends BaseRiotClient {
    /**
     * Call the by-name action on Riot's API and return a Promise with the searched Summoner if exist.
     * @return {Promise<AxiosResponse<RiotRotation>>}
     *
     */
    getRotation() {
        return this._axios.get(`/lol/platform/v3/champion-rotations`);
    }
}

// Return instance of the Client.
module.exports = new RiotRotationClient();
