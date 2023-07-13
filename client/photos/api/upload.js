const router = require('express').Router();
const cloudinary = require('../src/utils/config');
router.post('/', async (req, res, next) => {
try {
const fileStr = req.body.data
const uploadResponse = await cloudinary.uploader.upload(fileStr, {
upload_preset: 'Upload',
})
let secureURL = uploadResponse.secure_url
} catch (error) {
next(error)
}
})
module.exports = router