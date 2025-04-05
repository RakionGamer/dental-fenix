const express = require('express');
const router = express.Router();
const Controller = require('./controllers');


/* Root page */
router.get('/',Controller.protectRoute,Controller.view);
router.get('/delete/:id',Controller.delete);
router.get('/edit/:id',Controller.edit);
router.get('/login',Controller.protectrouteLogin,Controller.userViewLogin);
router.get('/logout',Controller.logout);
router.get('/guia',Controller.userGuia);

router.post('/add',Controller.save);
router.post('/edit/:id',Controller.update);
router.post('/login',Controller.user);
router.post('/register',Controller.userRegister);


module.exports = router;
