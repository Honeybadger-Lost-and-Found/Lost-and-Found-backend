const express = require('express')
const port = 3000;
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

//imageUploadImports
require('dotenv').config()
const cloudinary = require('cloudinary')
const formData = require('express-form-data')
const cors = require('cors')
const { CLIENT_ORIGIN } = require('./config')
//imageUploadImports END

const app = express()
const itemController = require('./controllers/itemController');

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride('_method'));

app.get('/', (req, res) => {
  res.send('Lost and Found!');
})

app.use('/items', itemController)

app.listen(port, () => {
  console.log('---------------------------------------');
  console.log('Express listening on localhost:' + port);
  console.log('---------------------------------------');
});

//IMAGEUPLOAD=================
cloudinary.config({ 
  cloud_name:"dcf8t0wl3" , 
  api_key: "881314452695989", 
  api_secret: "XzX387t_YQSQndIQOxqUDt0Khm0"
})
  
app.use(cors({ 
  origin: CLIENT_ORIGIN 
})) 

app.use(formData.parse())

app.get('/wake-up', (req, res) => res.send('👌'))

app.post('/image-upload', (req, res) => {

  const values = Object.values(req.files)
  const promises = values.map(image => cloudinary.uploader.upload(image.path))
  
  Promise
    .all(promises)
    .then(results => res.json(results))
    .catch((err) => res.status(400).json(err))
})

app.listen(process.env.PORT || 8080, () => console.log('👍'))
//IMAGEUPLOAD END=================

