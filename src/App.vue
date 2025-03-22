<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue"
import { ref, computed } from 'vue'


const a = ref(0)

setInterval(() => {
  a.value = a.value + 1
}, 3000)


function customHandler(title) {
  console.log(title)
}

const aMultiplied = computed(() => a.value * 2)

const myArray = [1,2,3,4,5]

</script>

<template>
    <div class="placeholder">{{ a }} 
      <div class="element">
        I am blue
      </div>
    </div>
    <div>{{ aMultiplied }}</div>

    <div v-if="a > 3">A is greater than 3</div>
    <div v-else>A is still not that great</div>

    <div :class="{'active': true}"></div>

    <div v-for="(element, index) in myArray" 
        :key="index">
      {{ element }}
    </div>

    <hello-world title="Tralala" @on-pressed="customHandler"></hello-world>
    <hello-world title="asdasd" @on-pressed="customHandler"></hello-world>
    <hello-world title="asdasd" @on-pressed="customHandler"></hello-world>
    <hello-world title="Tralala" @on-pressed="customHandler"></hello-world>
    <hello-world title="Tralala" @on-pressed="customHandler"></hello-world>
</template>

<style scoped lang="scss">
 .placeholder {
  background: red;
  color: white; 
  .element {
    color: blue;
  }
 }
</style>
