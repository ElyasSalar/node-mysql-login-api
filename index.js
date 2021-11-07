const express = require('express');
const bodyParser = require('body-parser');
const hashCode = require('./utils/hash');
const usersRoutes = require('./routes/users');
const authUsersRoutes = require('./routes/authUser');

const app = express();

// middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// routes
app.use('/api/users', usersRoutes);
app.use('/api/authUser', authUsersRoutes);

app.listen(process.env.PORT || 3000, () => {
  console.log('server is alive...')
})
