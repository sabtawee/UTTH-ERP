const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');


const userRoutes = require('./src/cores/user/user.route');



dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// connect to database


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/v1/users', userRoutes);


app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port  http://localhost:${process.env.PORT || 3000}`);
});
