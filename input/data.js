const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://nkverma1314:ASDFGhjkl@cluster0.odqpocw.mongodb.net/mydb', { useNewUrlParser: true, useUnifiedTopology: true });
const express = require('express');
const Device = require('./models/device');

const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const port = 5001;

app.get('/data/devices', (req, res) => {
  Device.find({})
    .then(devices => res.send(devices))
    .catch(err => res.send(err));
})

app.post('/data/devices', async (req, res) => {
  const { id, password } = req.body;
  const newDevice = new Device({
    id,
    password
  });

  try {
    await newDevice.save();
    res.send('successfully added device and data');
  } catch (err) {
    res.send(err);
  }
});


app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
