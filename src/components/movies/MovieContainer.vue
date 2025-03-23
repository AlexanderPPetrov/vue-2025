<template>
    <search-input v-model="searchValue">
        <div>Намери филм:</div>
    </search-input>
    <movie-list class="font-bold in-container" v-if="filteredMovies.length" :movie-list="filteredMovies"></movie-list>
    <div v-else>
        Няма намерени филми!
    </div>
</template>

<script setup lang="ts">
import { computed, watch, ref } from 'vue'
import SearchInput from '../SearchInput.vue';
import MovieList from './MovieList.vue';
import type { MovieListType } from './types';

const movies: MovieListType = [
 {
    id: "1",
    title: "Tralala 2"
 },
 {
    id: "2",
    title: "The Witcher",
 },
 {
    id: "3",
    title: "The Witcher 2",
 },
]

const filteredMovies = computed(() => {
    return movies.filter(({ title }) => title.toLocaleLowerCase().includes(searchValue.value.toLocaleLowerCase()))
})

const searchValue = ref<string>('')

//Example of watch
watch(searchValue, (value, prevValue) => {
    //console.log(value, ':', prevValue)
}, {
    immediate: false, // optional to trigger an immediate call of watcher
    deep: true, // used for nested objects and arrays
})


</script>


<style scoped lang="css">
    .in-container {
        border: 1px solid yellowgreen;
    }

    :deep(.movie-list-item) {
        border: 1px solid purple;
    }
</style>