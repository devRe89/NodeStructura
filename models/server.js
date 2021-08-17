const express = require('express');
const cors = require('cors');
require('dotenv').config();


class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        this.middlewares();

        this.routes();
    }

    middlewares(){
        //Cors
        this.app.use( cors() );

        this.app.use(express.json());

        // Directorio Public
        this.app.use( express.static('public') );
    }

    routes(){
        //Rutas Usuarios
        this.app.use('/api/user', require('../routes/user'));
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Server corriendo en puerto ${this.port}`);
        });
    }
}

module.exports = Server;