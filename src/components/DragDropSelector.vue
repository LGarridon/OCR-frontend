<template>
    <div class="container main">
        <div class="container_header">
            <div class="parent-container">
                <div class="drop-container rounded">
                    <div class="drop-inside rounded" @drop="drop" @dragover="dragover" @dragenter="dragenter" @dragleave="dragleave">
                        <div class="drop-text" v-if="imageUrls.length <= 0">
                            <p>
                                {{
                                    dragging ? 'Soltar archivos aquí' : 'Arrastra y suelta la imagen'
                                }}
                            </p>
                        </div>
                        <div class="container" v-if="imageUrls.length > 0">
                            <div class="row">
                                <ImageItem :imageUrls="imageUrls" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
  // Importa el componente hijo
  import ImageItem from './ImageItem.vue';

  export default {
    name: 'ParentComponent',
    components: {
      ImageItem,
    },
    data() {
        return {
            imageUrls: [],
            dragging: false,
        };
    },
    methods: {
        handleFileChange(event) {
            const file = event.target.files[0];

            if (file) {
                this.imageUrl = URL.createObjectURL(file);
            } else {
                this.imageUrl = null;
            }
        },
        dragover(event) {
            event.preventDefault();
        },
        dragenter() {
            this.dragging = true;
        },
        dragleave() {
            this.dragging = false;
        },
        drop(event) {
            event.preventDefault()
            const file = event.dataTransfer.files;
            console.log(file);
            const imageFiles = Array.from(file).filter(file => file.type.startsWith('image/'));

            if (imageFiles.length > 0) {
                // Crear una URL temporal para cada imagen y agregarlas al array
                const newImageUrls = imageFiles.map(file => URL.createObjectURL(file));
                this.imageUrls = [...this.imageUrls, ...newImageUrls];
            } else {
                alert('Por favor suelta solo archivos de imagen válidos.');
            }
        }
    },
  };
</script>
  
<style scoped>
    .parent-container {
        text-align: center;
        margin-top: 30px;
    }

    .form-control {
        margin: 20px auto;
        display: block;
        max-width: 300px;
    }
    .drop-container {
        background: rgb(255, 183, 0);
        padding: 15px;
    }
    .drop-inside {
        width: 100%;
        height: 400px;
        border: 2px dashed white;
        display: flex;
        cursor: pointer;
        background: rgb(231 166 0);
    }
    .drop-text {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
    }
    .drop-text p {
        font-weight: bold;
        font-size: 25px;
        color: white;
    }
</style>