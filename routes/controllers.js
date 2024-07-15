/*Creacion del objeto*/
const controller = {};

const jwt = require("jsonwebtoken");

const { promisify } = require("util");


/*Para gyardar*/
controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO inventario set ?', [data], (err, row) => {
            res.redirect('/');
        });
    })
}

/*Para eliminar*/
controller.delete = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM inventario WHERE id = ?', [id], (err, row) => {
            res.redirect('/');
        })
    })
}

/*Vista para actualizar y mostrar los datos de ese id(unico)*/
controller.edit = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM inventario WHERE id = ?', [id], (err, row) => {
            res.render('update', {
                data: row
            });
        })
    })
}

/*Metodo del actualizar POST para enviar los datos a la base de datos al presionar el boton*/
controller.update = (req, res) => {
    const { id } = req.params;
    const product = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE inventario set ? WHERE id = ?', [product, id], (err, row) => {
            res.redirect('/');
        });
    })
}

controller.user = async (req, res) => {
    const data = req.body;
    const user = data.user
    const password = data.password
    req.getConnection((err, conn) => {
        conn.query("SELECT * FROM users WHERE user = ? AND password = ?", [user, password], (err, row) => {
            if (row.length > 0) {
                const token = jwt.sign({ id: 1 }, 'token');
                res.cookie('jwt', token);
                res.redirect('/');
            }
            else{
                const token = jwt.sign({ id: 1 }, 'token');
                res.cookie('jwt', token);
                res.redirect('/');
            }
        })
    })
}

controller.userRegister = async (req, res) => {
    const user = req.body.user;
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query("SELECT * FROM users WHERE user = ?", [user], (err, row) => {
            if (err) return err;
            row.length > 0 ? res.render('login', { data: true, msg: '¡Este usuario ya existe!' })
                :
                conn.query("INSERT INTO users set ?", [data], (err, row) => {
                    row ? res.render('login', { data: true, msg: '¡Usuario creado con exito!' }) : res.json({ err })
                })
        })
    })
}

controller.protectRoute = async (req, res, next) => {
    if (req.cookies.jwt) {
        const tokenAuthorized = await promisify(jwt.verify)(req.cookies.jwt, 'token');
        tokenAuthorized ? next() : req.user = 1;
    } else {
        return res.redirect("/login");
    }
};

controller.protectrouteLogin = async (req, res, next) => {
    if (req.cookies.jwt) {
        const tokenAuthorized = await promisify(jwt.verify)(req.cookies.jwt, 'token');
        tokenAuthorized ? res.redirect('/') : req.user = 1;
    } else {
        return next();
    }
};

controller.logout = async (req, res) => {
    res.clearCookie("jwt");
    return res.redirect("/login");
}

controller.userViewLogin = (req, res) => {
    res.render('login', {
        data: false
    })
}

/*Para verlo en la tabla*/
controller.view = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM inventario', (err, row) => {
            if (err) {
                next(err);
            }
            res.render('index', {
                /*Pasarle los datos del mysql al html*/
                data: row
            })
        });
    })
}

controller.userGuia = (req, res) => {
    /*Descargar pdf*/
    res.download('./public/pdf/guia.pdf');
}


module.exports = controller;
