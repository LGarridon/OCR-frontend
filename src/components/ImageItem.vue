<template>
    <div class="image-container">
        <img 
            v-for="(url, index) in imageUrls" 
            :key="index" 
            :src="url" 
            alt="Imagen seleccionada" 
            class="image-preview col-2"
        />
        <div class="drop-circle col-2">
            <p>
                Arrastra y suelta la imagen
            </p>
        </div>
    </div>
</template>
  
<script>
  export default {
    name: 'ChildComponent',
    props: {
        imageUrls: {
            type: Array,
            default: () => [],
        },
    },
  };
</script>
  
<style scoped>
    .image-container {
        text-align: center;
        margin: 20px;
    }
    .image-preview {
        max-width: 150px;
        max-height: 150px;
        border: 1px solid #ccc;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        margin: 15px;
    }
    .drop-circle {
        width: 150px;
        height: 150px;
        background-color: rgb(224, 224, 224);
        border-radius: 50%; /* Hace que el div sea un círculo */
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        color: #555;
        font-weight: 500;
        cursor: pointer;
        user-select: none;
        margin: 20px auto;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        transition: background-color 0.3s;
    }

    .drop-circle:hover {
        background-color: rgb(200, 200, 200);
    }

    .drop-circle p {
        font-size: 15px;
    }
</style>