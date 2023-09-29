<template>
  <main class="informComp">
    <!-- 使用伪元素 设置 喇叭 -->
    <i class="bell fa fa-bell-o" aria-hidden="true"></i>
    <p class="info-content">
      gitee地址：https://www.bilibili.com/video/BV1eM41167Ks/?share_source=copy_web&vd_source=9738e48d8c99433fae3902e2364fbe66
    </p>

  </main>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => { })

</script>

<style lang='scss' scoped>
.informComp {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 780px;
  height: 130px;
  border: 1px dashed #ddd;
  padding: 20px;
  margin-bottom: 30px;
  border-radius: 15px;

  .bell {
    width: 50px;
    height: 20px;
    color: orange;
    text-align: center;
    font-size: 22px;
    animation: scale 0.8s infinite;
  }

  .info-content {
    font-size: 16px;
    margin-left: 20px;
    line-height: 1.5; // 行高 也是 行间距， 不带单位就是当前字体大小的倍数
  }
}


@keyframes scale {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
}
</style>