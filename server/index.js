const express = require('express');
const app = express();


const config = require('./config/key');
const mongoose = require('mongoose');
mongoose.connect(config.mongoURI).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

const bodyParser = require('body-parser');
const {
  User
} = require('./models/User');
const {
  auth
} = require('./middleware/auth');

const cookieParser = require('cookie-parser');

//application/x-www-form-urlencorded
app.use(bodyParser.urlencoded({
  extended: true
}));

//application/json
app.use(bodyParser.json());

app.use(cookieParser());

app.use('/api/users', require('./routes/users'));
//app.use('/api/favorite', require('./routes/favorite'));

//use this to show the image you have in node js server to client (react js)
//https://stackoverflow.com/questions/48914987/send-image-path-from-node-js-express-server-to-react-client
app.use('/uploads', express.static('uploads'));

const port = process.env.PORT || 5000;

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {

  // Set static folder
  app.use(express.static("client/build"));

  // index.html for all page routes
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
  });
}


app.listen(port, () => {
  console.log(`Dev app listening on port ${port}`)
})