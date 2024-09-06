const router = require('express').Router();

const apiRoutes = require('./api');
const blogController = require('./blogController');
const commentController = require('./commentController')

router.use('/', blogController);
router.use('/', commentController)
router.use('/api', apiRoutes);

module.exports = router;