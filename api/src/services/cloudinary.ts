import cloudinary, { UploadStream } from 'cloudinary';

export const cloudinaryUpload = async (stream: UploadStream) => {
  const response = {
    url: '',
    publicId: '',
  };

  cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  try {
    await new Promise((resolve, reject) => {
      const streamLoad = cloudinary.v2.uploader.upload_stream((error, result) => {
        if (result) {
          response.url = result.secure_url;
          response.publicId = result.public_id;
          // const resultSecureUrl = result.secure_url;
          resolve(response);
        } else {
          reject(error);
        }
      });

      stream.pipe(streamLoad);
    });
  } catch (err) {
    throw new Error(`Failed to upload profile picture ! Err:${err}`);
  }

  return response;
};

export const cloudinaryDelete = async (cloudinaryName: string) => {
  cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  const result = await cloudinary.v2.uploader.destroy(cloudinaryName);

  if (result.result && result.result === 'ok') {
    return true;
  }

  return false;
};
