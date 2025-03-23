<template>
    <default-layout>

      <template v-slot:header>
        <div>Header Item 1</div>
        <div>Header Item 2</div>
        <div>Header Item 3</div>
      </template>

      <movie-container/>

      <template v-slot:footer>
        <div>Footer content</div>
      </template>
      
    </default-layout>
</template>

<script setup lang="ts">
import DefaultLayout from './layouts/DefaultLayout.vue';
import MovieContainer from './components/movies/MovieContainer.vue';

</script>


<style scoped lang="scss">
 .placeholder {
  background: red;
  color: white; 
  .element {
    color: blue;
  }
 }
</style>
