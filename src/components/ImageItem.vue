<template>
    <div class="image-grid">
        <img 
            v-for="(url, index) in imageUrls" 
            :key="index" 
            :src="url" 
            alt="Imagen seleccionada" 
            class="image-preview col-2"/>
        <div class="drop-circle">
            <PlusCircleIconSVG />
        </div>
    </div>
</template>
  
<script>
    import PlusCircleIconSVG from './svg/PlusCircleIconSVG.vue';

    export default {
        name: 'ChildComponent',
        components: {
            PlusCircleIconSVG
        },
        props: {
            imageUrls: {
                type: Array,
                default: () => [],
            },
        },
    };
</script>
  
<style scoped>
    .image-grid {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        padding: 20px;
        justify-content: left;
    }

    .image-grid img {
        width: 150px;
        height: 150px;
        object-fit: cover;
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        transition: transform 0.3s ease;
    }

    .image-grid img:hover {
        transform: scale(1.1);
    }

    .drop-circle {
        width: 80px;
        height: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: transform 0.3s ease;
    }

    .drop-circle:hover {
        transform: scale(1.1);
        cursor: pointer;
    }
</style>