const ImageKit = require('@imagekit/nodejs') 

const client = new ImageKit({
  privateKey: process.env.IMAGE_KIT_PRIVATE_KEY, // This is the default and can be omitted
});


 module.exports.uploadFile=async(buffer)=> {
  try {
    const response = await client.files.upload({
      file: buffer.toString('base64'), 
      fileName: "Image.jpeg", 
    });
    console.log(response)
    return response;


  } catch (error) {
    console.error('Error uploading file:', error);
    throw error;
  }}

  