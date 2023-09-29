

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

// 文章全部内容
export const articleOne = {
  id: 1,
  content: `
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