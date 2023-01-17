const sequelize = require('./config/connection');
const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./routes/note.routes');
const corsOptions = {
  origin: 'http://localhost:3001'
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

const PORT = process.env.PORT || 3001;

sequelize.authenticate().then(() => {
  console.log('Database connection established');
}).catch((error) => {
  console.error('Database connection failed; ', error);
});

sequelize.sync().then(() => {
  console.log('Synced');
}).catch((error) => {
  console.error (error);
});

app.listen(PORT, () => console.log(`Server running on ${PORT}...`))