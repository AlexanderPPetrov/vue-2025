<template>
    <div class="container">
    <header>
        <slot name="header"></slot>
    </header>
    <main>
        <slot></slot>
    </main>
    <footer>
        <slot name="footer"></slot>
    </footer>
    </div>
</template>

<script setup lang="ts">
import { provide } from 'vue'

provide('layout', 'default')
</script>



<style>
</style>