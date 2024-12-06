<template>
  <ImageSelector />
</template>

<script>
import ImageSelector from './components/ImageSelector.vue'

export default {
  name: 'App',
  components: {
    ImageSelector
  }
}
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

