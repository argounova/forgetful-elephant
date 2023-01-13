const sequelize = require('./config/connection');
const express = require('express');
const cors = require('cors');
const app = express();
require('./routes/note.routes')(app);

const corsOptions = {
  origin: 'http://localhost:3001'
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3001;
sequelize.sync({force:false}).then(() => {
app.listen(PORT, () => console.log(`Server running on ${PORT}...`));
});