const mongoose = require('mongoose');

const URI = process.env.MONGO_URI

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(db => console.log('DB is connected'))
  .catch(err => console.error(err));