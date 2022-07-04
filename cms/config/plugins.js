module.exports = {
  upload: {
    config: {
      provider: '@strapi-community/strapi-provider-upload-google-cloud-storage',
      providerOptions: {
          bucketName: 'nesuto-assets',
          publicFiles: true,
          uniform: false,
          basePath: '',
      },
    },
  },
}