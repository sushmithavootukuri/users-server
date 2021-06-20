const router = require('express').Router()
const userCtrl = require('../controllers/userCtrl')


router.route('/')
    .post(userCtrl.createUsers)
    .get(userCtrl.getUsers)


router.route('/:id')
    .put(userCtrl.updateUser)

module.exports = router