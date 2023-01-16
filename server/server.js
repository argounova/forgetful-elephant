const sequelize = require('./config/connection');
const express = require('express');
const cors = require('cors');
const app = express();
require('./routes/note.routes')(app);
require('./models/Note');

const corsOptions = {
  origin: 'http://localhost:3001'
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3001;

sequelize.authenticate().then(() => {
  console.log('Database connection established');
}).catch((error) => {
  console.log('Database connection failed; ', error);
});

sequelize.sync().then(() => {
  console.log('Note table created');
}).catch((error) => {
  console.err('Unable to create table; ', error);
});

app.listen(PORT, () => console.log(`Server running on ${PORT}...`))