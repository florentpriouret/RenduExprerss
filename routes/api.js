const bodyParser = require('body-parser');
const router = require('express').Router();

const summonersRouter = require('./api/summoners');
const rotationRouter = require('./api/rotation');

// Use the library body-parser. It will, for all API routes, retrieve data from body request, be sur the body is valid
// JSON and convert it to a JS object.
router.use(bodyParser.json());

router.use(summonersRouter);

router.use(rotationRouter);

module.exports = router;
