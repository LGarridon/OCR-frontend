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

    <div v-if="alertMessage" :class="alertClass" role="alert">
      {{ alertMessage }}
    </div>

    <div class="mb-3">
      <div v-if="isLoading" class="d-flex justify-content-center">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Cargando...</span>
        </div>
      </div>
    </div>

    <div class="mb-3" v-if="!isLoading">
      <div id="result" style="margin-top: 20px; font-size: 16px;"></div>
      <form id="uploadForm">
        <input class="form-control" type="file" id="formFile" @change="handleFileChange">
        <button id="submit_button" class="btn btn-primary" @click="fetchData">Enviar</button>
      </form>
    </div>
  </div>
</template>

<script>
import { imageService } from '../services/imageService';

export default {
  data() {
    return {
        file: null,
        result: null,
        isLoading: false,
        alertMessage: null,
        alertClass: '',
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

      this.isLoading = true;
      this.alertMessage = null;

      if (!this.file) {
        this.alertMessage = 'Por favor selecciona un archivo.';
        this.alertClass = 'alert alert-warning';
        this.isLoading = false;
        this.alertClass = 'alert alert-success';
        return;
      }

      try {
        const response = await imageService.convertImageToText(this.file);
        this.result = response
        this.alertMessage = 'Success';
        this.alertClass = 'alert alert-success';
        console.log(this.result)
      } catch (err) {
        this.alertMessage = 'Error';
        this.alertClass = 'alert alert-danger';
        console.log(err)
      } finally {
        this.isLoading = false;
      }
    }
  }
};
</script>

<style>
    body {
        background-color: #f5f5fa;
    }

    .header_title {
        font-weight: 600;
        font-size: 42px;
        line-height: 52px;
        color: #33333b;
        text-align: center;
    }

    .header_subtitle {
        max-width: 800px;
        margin: 8px auto 0;
        line-height: 32px;
        font-size: 22px;
        font-weight: 400;
        color: #47474f;
    }

    .container_header {
        padding: 6px 24px 30px;
    }

    #submit_button {
        margin-top: 25px;
    }
</style>
