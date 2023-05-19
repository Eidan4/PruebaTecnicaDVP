const { Router } = require('express');
const { check } = require('express-validator');

const { validateFields,
        validateJWT
    } = require('../middlewares');

const { 
        getUsers,
        createUser,
    } = require('../controllers');

const router = Router();

router.post('/', [
    // validateJWT,
    check('iduser', 'iduser is required').not().isEmpty(),
    check('login', 'login is required').not().isEmpty(),
    check('node_id', 'node_id is required').not().isEmpty(),
    check('avatar_url', 'avatar_url is required').not().isEmpty(),
    check('url', 'url is required').not().isEmpty(),
    check('html_url', 'html_url is required').not().isEmpty(),
    check('followers_url', 'followers_url is required').not().isEmpty(),
    check('following_url', 'following_url is required').not().isEmpty(),
    check('gists_url', 'gists_url is required').not().isEmpty(),
    check('starred_url', 'starred_url is required').not().isEmpty(),
    check('subscriptions_url', 'subscriptions_url is required').not().isEmpty(),
    check('organizations_url', 'organizations_url is required').not().isEmpty(),
    check('repos_url', 'repos_url is required').not().isEmpty(),
    check('events_url', 'events_url is required').not().isEmpty(),
    check('received_events_url', 'received_events_url is required').not().isEmpty(),
    check('type', 'type is required').not().isEmpty(),
    check('site_admin', 'site_admin is required').not().isEmpty(),
    check('score', 'score is required').not().isEmpty(),
    // validateFields
], createUser );

router.get('/', [
    // validateJWT,
], getUsers );

module.exports = router;