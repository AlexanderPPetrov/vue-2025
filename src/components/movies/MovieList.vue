<template>
    <div class="movies-list">
        <movie-list-item v-for="movie in movieList"
                        :key="movie.id"
                        :movie="movie"
        ></movie-list-item>
    </div>

</template>

<script setup lang="ts">
import MovieListItem from './MovieListItem.vue';
import type { MovieListType } from './types';

type Props = {
    movieList: MovieListType
}

defineProps<Props>()

</script>

<style lang="scss">
</style>