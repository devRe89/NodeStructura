const { Router } = require('express');
const router = Router();
const userController = require('../controllers/userController');

router.get('/', 
    userController.getUsuarios
);

router.post('/',
    userController.crearUsuario
);

router.put('/:id',
    userController.actualizarUsuario
);

router.delete('/',
    userController.eliminarUsuario
);


module.exports = router;