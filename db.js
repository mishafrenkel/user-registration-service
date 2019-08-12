var mongoose = require('mongoose');
// mongoose.Promise = global.Promise;

mongoose.connect(process.env.DATABASE || 'mongodb://localhost:27017/HRX')
  .then(() => console.log('connecting to Mongo Atlas Cluster'))
  .catch(e => console.error(e));

mongoose.connection.on('error', (err) => {
  console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
});
