export default {
    name: 'tiktok',
    title: 'TikTok',
    type: 'document',
    fields: [
      {
        name: 'videoFile',
        title: 'Video File',
        type: 'file',
        options: {
          accept: 'video/*', // Accepts all video formats
          storeOriginalFilename: true // Stores the original file name
        },
      },
    ]
  }
  