import cloudinary, { UploadStream } from 'cloudinary';

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const cloudinaryUpload = async (stream: UploadStream) => {
  let resultUrl = '';

  try {
    await new Promise((resolve, reject) => {
      const streamLoad = cloudinary.v2.uploader.upload_stream((error, result) => {
        if (result) {
          resultUrl = result.secure_url;
          // const resultSecureUrl = result.secure_url;
          resolve(resultUrl);
        } else {
          reject(error);
        }
      });

      stream.pipe(streamLoad);
    });
  } catch (err) {
    throw new Error(`Failed to upload profile picture ! Err:${err.message}`);
  }

  return resultUrl;
};

export default cloudinaryUpload;
