const express = require('express');
const app = express();
const cors = require('cors');
const env = require('dotenv');
const mongoose = require('mongoose');

env.config();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());
require('./routes/user')(app);

async function startServer() {
 try {
    await mongoose.connect(process.env.DB_CONNECTION_STRING, { useNewUrlParser: true });
    app.listen(PORT,() => console.log(`Server running on ${PORT}`));
  } catch (error) {
    throw(error);
  }
}
startServer();

