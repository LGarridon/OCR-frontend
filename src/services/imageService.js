// src/services/imageService.js

import axios from 'axios';

export const imageService = {
  async convertImageToText(file) {
    const formData = new FormData();
    formData.append('file', file);

      const response = await axios.post('http://localhost:3000/api/image-to-text', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      return response.data;
  }
};
