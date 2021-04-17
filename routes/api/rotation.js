const router = require('express').Router();
//const {Summoner} = require('../../db/mongoose');
const {RiotRotationClient} = require('../../riot');

router
    .route('/rotation')
    .get((req, res, next) => {
                RiotRotationClient.getRotation()
                    .then((response) => {

                        res.json(response);

                    }).catch((e) => {
                    // If no Summoner found in Riot's API, send 404 Not Found HTTP status code.
                    // @see https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#404
                    res.status(404);
                    // Send an error object with info.
                    res.json({
                        error: `Cannot find Rotation from Riot's API.`,
                    });
                });
    })
;

module.exports = router;
