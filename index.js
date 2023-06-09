const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const jwtSecret = process.env.JWT_SECRET;

const tyreRouter = require('./routes/tyreRouter');
const authRouter = require('./routes/authRouter');
const viewRouter = require('./routes/viewRouter');

require('dotenv').config();


const app = express();
app.use(cookieParser(jwtSecret));
app.use(cors());
const port = process.env.PORT;

// Connect to the database
mongoose
  .connect(process.env.DB, { useNewUrlParser: true })
  .then(() => console.log(`Database connected successfully`))
  .catch((err) => console.log(err));
// Since mongoose's Promise is deprecated, we override it with Node's Promise
mongoose.Promise = global.Promise;
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', tyreRouter);
app.use('/view', viewRouter);
app.use('/auth', authRouter);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use((err, req, res, next) => {
  console.log(err);
  next();
});
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// module.exports = app;