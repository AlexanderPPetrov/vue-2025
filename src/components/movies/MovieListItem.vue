<template>
    <div :id="movie.id" class="movie-list-item">
        {{ movie.title }}
    </div>
</template>

<script setup lang="ts">
import type { Movie } from './types';

type Props = {
    movie: Movie
}

const props = defineProps<Props>()

console.log(props.movie.id)
</script>

<style scoped lang="scss">
 .movie-list-item {
    padding: 12px;
    border-radius: 3px;
    border: 1px solid #efefef;
 }
</style>