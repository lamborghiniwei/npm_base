/*
* call 源码实现
* 2019-09-19
* */
export default function call (func, context, ...arg) {
    //  null undefined 时候 上下文对象为window call时传入null undefined上下文是window
   if (typeof context === 'object') {
       context = context || window
   } else {
       context = Object.create(null)
   }
   console.log('context', context)
   let fn = Symbol() // 用Symbol来做属性key的值,保持唯一性,避免冲突
   context[fn] = func
   const result = context[fn](...arg)
   //   执行完避免永久存在
   delete context[fn]
   //   函数可以有返回值
   return result
}