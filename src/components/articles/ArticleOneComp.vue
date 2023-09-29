<template>
  <div ref="content" id="content">
    <h3><strong>匿名函数表达式</strong></h3>
    <p> <strong>undefined</strong> 已定义但是未被赋值</p>
    <ul>
      <li>
        <p>必须用变量去接收匿名函数，且u只能在函数声明之后调用</p>
      </li>
      <li>
        <p>代码中只要出现 anon_fun(), 就会执行一遍匿名函数的函数体</p>
      </li>
      <li>
        <p><strong>被匿名函数赋值的变量</strong>不是一个方法, 没有经过function的洗礼, so后面不能加() ，</p>
        <p>此时被匿名函数赋值的变量 仍是 未被赋值 的状态 undefined</p>
      </li>
    </ul>
    <pre v-highlight><code  class="language-JavaScript">     var anon_fun = function(){
      document.write(&#39;hello&lt;br&gt;&#39;)
  }
anon_fun() 
var list_1 = anon_fun 
//   var list_1 = anon_fun()  
//  这样写不正确，函数名()不能赋给变量,会报错,承受不住,因为list_1本身就不是函数 

list_1()                    // 执行anon_fun函数体的内容
console.log(typeof list_1)  // function
console.log(typeof anon_fun())  // function

console.log(anon_fun)     // ƒ (){ document.write(&#39;hello&lt;br&gt;&#39;)}
console.log(list_1)       // ƒ (){ document.write(&#39;hello&lt;br&gt;&#39;)}

console.log(anon_fun())   // undefined 没有返回值的函数默认返回undefined
console.log(list_1())     // undefined
</code></pre>
  </div>
</template>

<script setup lang="ts">
import { articleOne } from '@/data/articleList'
import { onMounted, ref } from 'vue';

const content = ref()

onMounted(() => {
  // content.value.innerHTML = articleOne.content
  // console.log('content.value.innerHTML==>', content.value.innerHTML);
})

</script>

<style lang='scss' scoped>
#content {

  p {
    all: initial
  }



}
</style>