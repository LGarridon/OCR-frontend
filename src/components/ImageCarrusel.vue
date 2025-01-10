<template>
    <div class="image-grid">
        <ImageItem
            v-for="(url, index) in imageUrls"
            :key="index"
            :src="url"/>
        <div class="drop-circle">
            <PlusCircleIconSVG />
        </div>
    </div>
</template>
  
<script>
    import PlusCircleIconSVG from './svg/PlusCircleIconSVG.vue';
    import ImageItem from './ImageItem.vue';

    export default {
        name: 'ImageCarrusel',
        components: {
            PlusCircleIconSVG,
            ImageItem
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