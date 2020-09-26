const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://root:${process.env.DB_PASSWORD}@products.v7sjq.mongodb.net/${process.env.DB_USER}?retryWrites=true&w=majority`,
  { 
    useNewUrlParser: true,
    useUnifiedTopology: true 
  });
mongoose.connection.once('open', () => {
  console.log('conneted to database');
});
module.exports = mongoose;
