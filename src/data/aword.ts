import { useAWordStore } from "@/stores/aWord";
const aWordStore = useAWordStore()

import axios from "axios";
console.log('data.aWord执行');


function request(method: string, url: string, params?: any) {
  return axios({
    method,
    url,
    params,
  });
}


async function getAWord() {
  let method = "GET";
  let url = "https://api.wrdan.com/hitokoto";
  const res = await request(method, url);
  // 存放进 pinia： 但是pinia再页面加载完成之后才会执行， 排在页面的
  // aWordStore.aWord = res.data.text
  localStorage.setItem('aWord', res.data.text)
}

getAWord()

let temp = '1'
export {
  temp
}  