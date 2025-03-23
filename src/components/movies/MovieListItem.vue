<template>
    <div :id="movie.id" class="movie-list-item">
        {{ movie.title }}
    </div>
</template>

<script setup lang="ts">
import type { Movie } from './types';
import { inject, nextTick, onMounted, onBeforeUnmount } from 'vue';
import { useAppStore } from '../../pinia/app';

const { theme, setTheme } = useAppStore();

console.log('tralala')

onMounted(() => {
    console.log('component is presented in html')
})

onBeforeUnmount(() => {
    console.log('component will be unmounted')
    // usually we clear event listeners or reset some store value
})

console.log(theme)
setTheme('dark')
console.log(theme)

nextTick(() => {
    console.log('all computations are done and components are rerendered')
})


const layout = inject('layout', null)
if(layout) {
    console.log(layout)
}

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