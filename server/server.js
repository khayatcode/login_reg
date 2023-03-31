const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');
const cookieParser = require('cookie-parser');

require('./config/mongoose.config');

require('dotenv').config();

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json(), express.urlencoded({ extended: true }));

require('./routes/user.routes')(app);
require('./routes/movie.routes')(app);

app.listen(port, () => console.log(`Listening on port: ${port}`));
