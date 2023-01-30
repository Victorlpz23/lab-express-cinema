const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/movies';

mongoose.connect(MONGODB_URI)
   .then(() => {
      console.info(`Application successfully connected to the database ${MONGODB_URI}`)
   })
   .catch((error) => console.error(`An error occurred trying to connect to the database ${MONGODB_URI}`));


