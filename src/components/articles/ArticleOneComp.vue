<template>
  <div id="content">
    <div ref="content" class="content-c">
      <h3>异步组件</h3>
      <p> 在大型项目中使用，一般用的较少。作为了解，了解一下写法。</p>
      <p> 在大型项目中，我们可能需要拆分应用为更小的块，并仅在需要时再从服务器加载相关组件。</p>
      <p> <strong>Vue 提供了 <code>defineAsyncComponent</code> 方法定义一个异步组件，来实现此功能</strong>，</p>
      <p> 这些组件不是在本地的，而是在服务器上的，需要的时候从服务器上拿。 也就是懒加载的形式。</p>
      <highlightjs language='javascript' code="        let numAndStr: number | string = 1
        numAndStr = 'a'

        let numAndStr2: 'b' | 2;   // 此时'b'和2是类型, 也就是numAndStr2 只能是'b' 或者 2
        // numAndStr2 = 3          // X 报错

        let obj: { name: '唐' } | { age: 22 };

        // 该对象只能含有 name属性 或者age属性  或者两者都有
        // 且name的值只能是 '唐' 同理age 只能是 22

        obj = { name: '唐' }
        obj = { age: 22 }
        obj = { name: '唐', age: 22 }" />

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
          <p v-red><strong>被匿名函数赋值的变量</strong>不是一个方法, 没有经过function的洗礼, so后面不能加() ，</p>
          <p>此时被匿名函数赋值的变量 仍是 未被赋值 的状态 undefined</p>
        </li>
      </ul>
      <div>
        <highlightjs language='javascript' code="    var anon_fun = function(){
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
"></highlightjs>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { articleOne } from '@/data/articleList'
import { onMounted, ref } from 'vue';

const content = ref()

onMounted(() => {
  // content.value.innerHTML = articleOne.content
  // console.log('content.value.innerHTML==>', content.value.innerHTML);

  // const preEls = document.querySelectorAll('pre')
  // preEls.forEach(item => {
  //   item.setAttribute('v-highlight', '');
  // })

})

</script>

<style lang='scss' scoped>
#content {

  width: 100%;
  overflow: hidden;
  margin-bottom: 50px;

  .content-c {
    width: 800px;
    margin: 0 auto;
    // background-color: pink;
    position: relative;

    /* markdown样式 */

    blockquote {
      margin: 0;
      padding: 15px 50px;
      position: relative;
      word-break: break-word;
      text-align: center;
    }

    blockquote:before {
      content: "\f10d";
      font-size: 1.5rem;
      position: absolute;
      top: 0;
      left: 0;
      color: orange;
      font-family: FontAwesome;
    }

    blockquote:after {
      content: '\f10e';
      font-size: 1.5rem;
      position: absolute;
      bottom: 0;
      right: 0;
      color: orange;
      font-family: FontAwesome;
    }

    code:not(.hljs) {
      background: #fefac7;
      color: #e67474;
      word-break: break-word;
      padding: 4px 6px;
      border-radius: 5px;
    }

    ul {
      list-style: disc;
      padding: 0 10px 0 35px;
      color: var(--articleGreyFontColor);
      border-radius: 10px;
    }

    ol {
      list-style: decimal;
      padding: 0 10px 0 35px;
      color: var(--articleGreyFontColor);
      border-radius: 10px;
    }

    ol li,
    ul li {
      padding: 8px 0;
      Letter-spacing: 1px;
      line-height: 24px;
    }

    h3 {
      padding-bottom: 8px;
      border-bottom: 1px dashed #ddd;
    }

    h1,
    h2,
    h2,
    h3,
    h4 {
      margin-top: 30px;
      margin-bottom: 20px;
    }

    h2 {
      padding-left: 40px;
    }

    h3 {
      padding-left: 20px;
      font-size: 22px;
    }

    h4 {
      padding-left: 20px;
      font-size: 20px;
    }

    h5 {
      font-size: 18px;
      padding-left: 28px;
    }

    h2:before {
      content: "🌺";
      position: absolute;
      left: 0;
      font-size: 1.03em;
      margin-top: -2px;
    }

    h3:before {
      content: "#";
      left: 0;
      position: absolute;
      margin-top: 2px;
      color: #ff6d6d;
    }

    h4:before {
      content: "▌";
      left: 0;
      position: absolute;
      color: #ff6d6d;
    }

    h5:before {
      content: "🌷";
      left: 0;
      position: absolute;
    }

    a {
      color: #e67474;
      position: relative;
      text-decoration: none;
    }

    a:hover {
      color: orange;
    }

    a:after {
      content: '';
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 1.5px;
      bottom: -2px;
      left: 0;
      background-color: orange;
      transform-origin: bottom right;
      transition: transform 0.25s ease-out;
    }

    a:hover:after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }

    p {
      color: var(--articleFontColor);
      line-height: 35px;
      word-break: break-word;
      font-size: 18px;
    }

    hr {
      margin-top: 20px;
      margin-bottom: 20px;
      border: 0.5px dashed #fc625d;
    }

    img {
      max-width: 100%;
      border-radius: 5px;
    }


  }




}
</style>