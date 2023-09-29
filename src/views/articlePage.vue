<template>
  <div class="articlePage">

    <div class="top-img">
      <img src="../assets//home-img.jpg" alt="">
    </div>
    <!-- 占位div -->
    <!-- 因为 背景图使用了定位，定到了header下面，正常的文档流被改变，就需要占位把正常的文档流顶下来 -->
    <div class="placeholder"></div>
    <div class="content">
      文章详情页{{ route.query.id }}

      <ArticleOneComp></ArticleOneComp>

    </div>

  </div>
</template>

<script setup lang="ts">
import ArticleOneComp from '@/components/articles/ArticleOneComp.vue'
import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const route = useRoute()
const router = useRouter()

console.log('route.query.id===>', route.query.id)

onMounted(() => { })

</script>

<style lang='scss' scoped>
// % 相对于父元素的大小
// vh 和 vw 是相对于当前窗口的比值
.articlePage {
  position: relative;
  width: 100vw;
  height: 100vh;

  .top-img {
    position: absolute;
    top: -100px;
    width: 100%;
    height: 300px;
    // background-color: pink;
    overflow: hidden;
    z-index: -9999;

    img {
      width: 100%;
    }
  }

  .placeholder {
    height: 200px;
  }

  .content {
    // border: 1px solid black;
  }

}
</style>