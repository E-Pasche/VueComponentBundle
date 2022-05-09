<script setup>
import { reactive, ref } from 'vue'

const count = ref(0)
const message = ref('Hello World!')

function increment() {
  count.value++
}

</script>

<template>
  <h1>{{ message }}</h1>
  <button @click="increment">count is: {{ count }}</button>
</template>