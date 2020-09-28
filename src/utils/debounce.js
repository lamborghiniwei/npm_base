/*
* 防抖(debounce)
* 2019-09-19
* 在事件被触发的n秒后再执行回调函数, 如果在这n秒内又被触发,则重新计时延迟时间
* 比如延时60秒触发, 在60秒内再次触发,重新计时60秒后再执行
* */

export default  function debounce (fn, delay) {
    let timer = null;
    return function () {
        let context = this;
        let args = arguments;
        timer && clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(context, args)
        }, delay)
    }
}