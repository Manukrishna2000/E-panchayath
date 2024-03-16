// uploadController.js

const multer = require('multer');

// Set storage engine
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/') // Uploads folder where files will be stored
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)); // File name will be originalname + timestamp
  }
});

// Initialize upload
const upload = multer({
  storage: storage
}).single('file'); // Name of the file input field in your form

// Handle file upload
exports.uploadFile = (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      // Handle error
      console.error(err);
      res.status(500).json({ error: err.message });
    } else {
      // File uploaded successfully
      res.json({ message: 'File uploaded successfully' });
    }
  });
};
