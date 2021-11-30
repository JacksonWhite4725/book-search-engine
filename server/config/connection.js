const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/book-search-engine-db',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
);

module.exports = mongoose.connection;
