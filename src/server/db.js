import mongoose from 'mongoose';

export default callback => {
	mongoose.connect('mongodb://localhost:27017/rssb', { useMongoClient: true }, err => {
		if (err) console.error('Database connection error', err);
	});
	mongoose.Promise = global.Promise;
	callback(mongoose);
}
