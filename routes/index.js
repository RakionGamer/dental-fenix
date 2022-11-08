const express = require('express');
const router = express.Router();
const path = require('path');

/*Multi-Language configuration*/
const { I18n } = require('i18n')
const i18n = new I18n({
  locales: ['es', 'en'],
  directory: path.join(__dirname, '/locales'),
  defaultLocale: 'es',
});

let translate = false;
//Renderizar el archivo raiz "index" para mostrarse
router.get('/',(req,res) => {
	i18n.init(req, res);
  	translate = req.acceptsLanguages('es');
	res.render('index.ejs',{
	get:{},
	IMG:'images/estados-unidos.png',
})});


router.get('/translate',(req,res,next)=>{
	if(translate){
	  i18n.init(req, res)
	  translate = false;
	  res.setLocale('en');
	  res.render('index.ejs',{
		get:{},
	  IMG:'images/spain.png',
	})
	}else if(!translate){
	  i18n.init(req, res);
	  res.setLocale('es');
	  translate = true;
	  res.render('index',{
	  get:{},
	  IMG:'images/estados-unidos.png',
	  })
	}
})

module.exports = router;
