import axios from "axios";
import { useAWordStore } from "@/stores/aWord";
const aWordStore = useAWordStore()


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
  aWordStore.aWord = res.data.text
}

getAWord()

let temp = '1'
export {
  temp
}  