import http from 'http';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import Seeder from './seeder';
import initializeDb from './db';
import middleware from './middleware';
import api from './api';
import routes from './routes';
import config from './config.json';

let app = express();
app.server = http.createServer(app);

// Static files
app.use(express.static('./src/server/public'));

// logger
app.use(morgan('dev'));

// 3rd party middleware
app.use(cors({
	exposedHeaders: config.corsHeaders
}));

app.use(bodyParser.json({
	limit : config.bodyLimit
}));

// Views
app.set('view engine', 'ejs');
app.set('views', './src/server/routes/views')

// connect to db
initializeDb( db => {

	// Development Seeder:
	if (process.env.NODE_ENV !== 'production') Seeder();

	// internal middleware
	app.use(middleware({ config, db }));

	// api router
	app.use('/api', api({ config, db }));

	// pages router
	app.use('/', routes({ config, db }));

	app.server.listen(process.env.PORT || config.port, () => {
		console.log(`Started on port ${app.server.address().port}`);
	});
});

export default app;
