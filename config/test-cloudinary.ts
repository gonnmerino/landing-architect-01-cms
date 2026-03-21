const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

cloudinary.api.ping((error, result) => {
  if (error) console.error("Error de conexión:", error);
  else console.log("Cloudinary OK:", result);
});