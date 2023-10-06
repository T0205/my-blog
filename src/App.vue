<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import mouseAnimate from '@/utils/mouseAnimation';
mouseAnimate()
</script>

<template>
  <RouterView />
</template>

<style lang="scss">
body {
  font-family: 'Heavy';
}
</style>  
