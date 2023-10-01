<template>
  <div class="KeyAnimationPage">
    <div id="element"></div>
    {{ keyWord }}
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import TypeIt from "typeit";
// 导入一言
const aWordStore = useAWordStore()
import { useAWordStore } from "@/stores/aWord";
import { temp } from '@/data/aword'

const keyWord = ref('')
keyWord.value = temp
keyWord.value = aWordStore.aWord

onMounted(() => {

  console.log('onMounted');


  // 提示的错误可以不管, 类型提示罢了,可以执行  
  new TypeIt("#element", {
    strings: keyWord.value,
    speed: 100,
    deleteSpeed: 100,
    startDelay: 1800,
    // loop: true,
    cursorSpeed: 800,
    cursorColor: 'color',
    waitUntilVisible: true, // 等到出现在视口里面再打印
    callback: function () {
      console.log(111);
    }
  }).go();

})

</script>

<style lang='scss' scoped>
.KeyAnimationPage {


  cursor: pointer;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  padding-left: 20px;
  padding-right: 25px;

  #element {
    font-size: 24px;
    color: rgb(247, 243, 243);
    margin: 13px 0;
    letter-spacing: 1px;
  }
}
</style>