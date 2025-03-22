<script setup lang="ts">
 
const emit = defineEmits(['on-pressed'])

type Props = {
  title: string
}

const props = defineProps<Props>()

console.log(props.title)

function onClick() {
  emit('on-pressed', props.title)
}

</script>

<template>
    <div @click="onClick"> 
      {{ title }}
    </div>
</template>

<style scoped>

</style>
