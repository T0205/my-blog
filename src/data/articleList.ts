

// 文章预览界面信息
export const articlePreList: articlePreObj[] = [
  {
    id: 1,
    time: '2023-9-23',
    title: 'Uni使用腾讯SDK',
    simpleDesc: '在小程序开发过程中经常使用到的获取定位功能,获取用户当前位置.',
    tagList: ['前端', 'uni', '地图SDK'],
    imgSrc: 'src/assets/img/avatar.png',
    link: ''
  },
  {
    id: 2,
    time: '2023-9-23',
    title: 'Uni使用腾讯SDK',
    simpleDesc: '在小程序开发过程中经常使用到的获取定位功能,获取用户当前位置.',
    tagList: ['前端', 'uni', '地图SDK'],
    imgSrc: 'src/assets/img/avatar.png',
    link: ''
  },
]



// ### TODO 自定义指令:自定义指令在使用innerHTML插入内容时 不生效 

// 文章全部内容
export const articleOne = {
  id: 1,
  content: `
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
    <pre><code  class="language-JavaScript">
    var anon_fun = function(){
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

<div>
<h3>KeepAlive</h3>
<p>  在多个组件间动态切换时 缓存被移除的组件实例。搭配动态组件使用的。【【】】</p>
<p>  当切换组件后，原来的组件的状态是需要保存的，此时就需要使用**<code>&lt;keepAlive&gt;</code>**</p>
<p>  当然也会缓存子组件组件中的子组件，即后代组件。</p>
<p>  <strong>onActived( )</strong></p>
<pre><code>若组件实例被包裹，且组件被插入到 DOM 中时调用时，也就是被渲染时，执行该函数。
</code></pre>
<p>  <strong>onDeactivated( )</strong></p>
<pre><code>若组件实例被 缓存树的一部分，当组件从 DOM 中被移除时调用，也就是不显示该组件时执行。
</code></pre>
<pre><code class="language-HTML">  &lt;input type=&quot;radio&quot; :value=&quot;AView&quot; v-model=&quot;currentComp&quot;&gt;A
  &lt;input type=&quot;radio&quot; :value=&quot;BView&quot; v-model=&quot;currentComp&quot;&gt;B
  &lt;input type=&quot;radio&quot; :value=&quot;CView&quot; v-model=&quot;currentComp&quot;&gt;C

  &lt;KeepAlive include=&quot;AView,CView&quot;&gt;       // 缓存这两个组件， 是组件名而不是import的组件实例
    &lt;component :is=&quot;currentComp&quot;&gt;&lt;/component&gt;
  &lt;/KeepAlive&gt;

  &lt;script setup&gt;
  import { shallowRef } from &#39;vue&#39;;
  import AView from &#39;./AView.vue&#39;;
  import BView from &#39;./BView.vue&#39;;
  import CView from &#39;./CView.vue&#39;;
    
  const currentComp = shallowRef(AView)
  </code></pre>
  <p>  动态组件加载完毕之后，点击切换不会执行组件的 <code>onBeforMounted</code> 和 <code>onMounted</code>，</p>
  <p>  因为已经被挂载好了，就没被卸载，所以当然不会再次执行<code>onBeforMounted</code>了。</p>
  <h4>包含/排除</h4>
  其中 exclude和 max经常搭配使用
  <pre><code class="language-HTML">    &lt;KeepAlive exclude=&quot;AView&quot; :max=&quot;8&quot;&gt;
        &lt;component :is=&quot;currentComp&quot;&gt;&lt;/component&gt;
      &lt;/KeepAlive&gt;
  </code></pre>
    `,
}

//   <h3>异步组件</h3>
//   <p> 在大型项目中使用，一般用的较少。作为了解，了解一下写法。</p>
//   <p> 在大型项目中，我们可能需要拆分应用为更小的块，并仅在需要时再从服务器加载相关组件。</p>
//   <p> <strong>Vue 提供了 <code>defineAsyncComponent</code> 方法定义一个异步组件，来实现此功能</strong>，</p>
//   <p> 这些组件不是在本地的，而是在服务器上的，需要的时候从服务器上拿。 也就是懒加载的形式。</p>
//   <highlightjs language='javascript' code="let numAndStr: number | string = 1
// numAndStr = 'a'

// let numAndStr2: 'b' | 2;   // 此时'b'和2是类型, 也就是numAndStr2 只能是'b' 或者 2
// // numAndStr2 = 3          // X 报错

// let obj: { name: '唐' } | { age: 22 };

// // 该对象只能含有 name属性 或者age属性  或者两者都有
// // 且name的值只能是 '唐' 同理age 只能是 22

// obj = { name: '唐' }
// obj = { age: 22 }
// obj = { name: '唐', age: 22 }" />