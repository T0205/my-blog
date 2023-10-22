<template>
  <div class="">
    <!-- 背景大图 封装成组件  -->
    <div class="home-image">
      <!-- <img class="home-bgi" v-lazy="homeBgcSrc" alt=""> -->
      <img class="home-bgi" :src="randomImg" alt="" />
      <!-- 为什么此时 v-lazy 就会出现加载错误, 在TS的测试项目中使用 v-lazy 都可以 -->
      <!-- <img class="home-bgi" v-lazy="randomImg" alt=""> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import { useBgcImgStore } from "@/stores/bgcImg";
import { randomInt } from "@/utils/tools";
const bgcImgStore = useBgcImgStore();

let homeBgcSrc = ref(bgcImgStore.BgcImg);
let randomImg = ref("");

import axios from "axios";
function request(method: string, url: string, params?: any) {
  return axios({
    method,
    url,
    params,
  });
}
async function getRandomImg() {
  let method = "GET";
  let url = "https://api.oioweb.cn/api/bing";
  const res = await request(method, url);
  console.log("res.data.result[0].url===>" + res.data.result);
  Math.random();
  randomImg.value = res.data.result[randomInt(0, 7)].url;
}

onMounted(() => {
  console.log("BackGroundImg mounted");
  getRandomImg();
});
</script>

<style lang="scss" scoped>
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
