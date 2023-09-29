<template>
  <div class="">
    <!-- 背景大图 封装成组件  -->
    <div class="home-image">
      <img class="home-bgi" :src="homeBgcSrc" alt="">
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import { useBgcImgStore } from '@/stores/bgcImg'
const bgcImgStore = useBgcImgStore()

let homeBgcSrc = ref(bgcImgStore.BgcImg)

onMounted(() => { })

</script>

<style lang='scss' scoped>
.home-image {
  position: fixed;
  left: 0;
  top: -150px;
  width: 100%;
  min-width: var(--min--width);
  z-index: -9999;
  animation: lowdown 1s ease-in-out forwards;

  img {
    width: 100%;
    height: 100%;
  }
}

/* 使用动画 页面加载时 往下移动 */
@keyframes lowdown {
  0% {
    transform: translateY(-4%);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>