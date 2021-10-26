const express = require('express');
const morgan = require('morgan');
const { mongoose } = require('./database.js');
const cors = require('cors');
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({ origin: '*'}));

// Routes
app.use('/api/admins', require('./routes/admins.routes.js'));
app.use('/api/casas', require('./routes/casas.routes.js'));
app.use('/auth/admin', require('./routes/authAdmin.routes.js'));
app.use('/auth/casa', require('./routes/authCasa.routes.js'))
app.use('/api/historial', require('./routes/historial.routes.js'));

// Server
app.listen(app.get('port'), () => {
    console.log('Server on port: ', app.get('port'));
})