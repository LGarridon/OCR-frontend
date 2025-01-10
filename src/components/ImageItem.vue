<template>
    <img 
        :src="src"
        alt="Imagen seleccionada"
        class="image-preview"
    />
</template>
<script>
    export default {
        name: 'ImageItem',
        props: {
            src: {
                type: String,
                required: true,
            },
        },
    };
</script>
<style scoped>
    .image-preview {
        width: 150px;
        height: 150px;
        object-fit: scale-down;
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        transition: transform 0.3s ease;
        background-color: white;
    }

    .image-preview:hover {
        transform: scale(1.1);
    }
</style>