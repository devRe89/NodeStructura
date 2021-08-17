const {Router} = require('express');
const userController = require('../controllers/userController');

const router = Router();

router.get('/',
    userController.getUsers
);

router.post('/',
    userController.postUsers
);

router.put('/',
    userController.putUsers
);

router.delete('/',
    userController.deleteUsers
);

module.exports = router;