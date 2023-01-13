const sequelize = require('./config/connection');
const express = require('express');
const cors = require('cors');
const app = express();
require('./routes/note.routes')(app);

const corsOptions = {
  origin: 'http://localhost:3000'
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({message: 'Welcome to bezkoder application, biiiiiitch.'});
});

const PORT = process.env.PORT || 3001;
sequelize.sync({force:false}).then(() => {
app.listen(PORT, () => console.log(`Server running on ${PORT}...`));
});