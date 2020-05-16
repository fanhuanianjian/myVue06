import {add} from "./mutation-type";

export default {
  //actions 是异步版mutation
  [add](context){
    // console.log("-----------");
    // setTimeout(()=>{
    //   console.log("++++++++++++");
    //   context.commit(add,2000)
    //   //不能直接更改值 需要调用mutation
    //   //context.num = 8000
    // },2000)

    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        context.commit(add,2000)

        resolve()
      },2000)
    })
  }
}
