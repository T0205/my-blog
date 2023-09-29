<template>
  <div id="content">
    <div ref="content" class="content-c">

    </div>
  </div>
</template>

<script setup lang="ts">
import { articleOne } from '@/data/articleList'
import { onMounted, ref } from 'vue';

const content = ref()

onMounted(() => {
  content.value.innerHTML = articleOne.content
  console.log('content.value.innerHTML==>', content.value.innerHTML);

  const preEls = document.querySelectorAll('pre')
  preEls.forEach(item => {
    item.setAttribute('v-highlight', '');
  })

})

</script>

<style lang='scss' scoped>
#content {

  width: 100%;
  overflow: hidden;

  .content-c {
    width: 800px;
    margin: 0 auto;
    // background-color: pink;
    margin-top: 50px;
  }

}
</style>