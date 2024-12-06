<template>
    <div class="container main">
      <div class="container_header">
      <p class="header_title">
        Convertir Imagen A Texto
      </p>
      <p class="header_subtitle">
        Un convertidor de imagen a texto para extraer texto de una imagen. Sube tu foto a nuestro convertir imagen a texto, para obtener el archivo de texto al instante.
      </p>
    </div>
    <div class="mb-3">
      <div id="result" style="margin-top: 20px; font-size: 16px;"></div>
      <form id="uploadForm">
        <input class="form-control" type="file" id="formFile" @change="handleFileChange">
        <button id="submit_button" class="btn btn-primary" @click="fetchData">Enviar</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      file: null,
      result: null,
      isLoading: null,
      responseText: null
    };
  },
  created() {
    console.log('Componente creado');
    console.log('Estado inicial:');
  },
  methods: {
    handleFileChange(event) {
      this.file = event.target.files[0];
    },
    async fetchData() {
      event.preventDefault();
      if (!this.file) {
        console.log('Por favor selecciona un archivo');
        return;
      }

      const formData = new FormData();
      formData.append('file', this.file);

      try {
        const response = await axios.post('http://localhost:3000/api/image-to-text', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        console.log(response)
      } catch (err) {
        console.log(err)
      } finally {
        console.log("fin");
      }
    }
  }
};
</script>