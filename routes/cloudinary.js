require('dotenv').config()
// console.log(process.env)
var express = require('express');
var router = express.Router();


// const cloudName = 'dhgqrdfrw';
// const cloudName = process.env.VITE_CLOUDINARY_CLOUD_NAME;
// const ApiKey = process.env.VITE_CLOUDINARY_API_KEY;
// const ApiSecret = process.env.VITE_CLOUDINARY_API_SECRET;

console.log('Loaded cloudinary route!');

const cloudName = process.env.VITE_CLOUDINARY_CLOUD_NAME;
const ApiKey = process.env.VITE_CLOUDINARY_API_KEY;
const ApiSecret = process.env.VITE_CLOUDINARY_API_SECRET;

router.get('/', function(req, res, next) {
  console.log("Cloudinary Cloud Name:", cloudName);
  console.log("Cloudinary API Key:", ApiKey);
  console.log("Cloudinary API Secret:", ApiSecret);
  res.send("Check console for Cloudinary variables");
});

module.exports = router;



