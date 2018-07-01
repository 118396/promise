
window.jQuery = function(nodeOrSelector){
    let nodes = {}
    nodes.addClass = function(){}
    nodes.html = function(){}
    return nodes
}
window.$ = window.jQuery

window.jQuery.ajax = function( {url,method,body,headers}){//给参数命名
    return new Promise(function(resolve, reject){// promise对象接受一个函数，这个函数就是要做的事情。
        let request = new XMLHttpRequest() 
        request.open(method,url) //配置 request
        for(let key in headers) {
            let value = headers[key]
            request.setRequestHeader(key,value)
        }
        request.onreadystatechange = ()=>{
            if(request.readyState === 4){
                if(request.status >= 200 && request.status < 300){
                    resolve.call(undefined, request.responseText)
                    }else if(request.status >= 400){
                    reject.call(undefined, request) 
                }
            }
        }
        request.send(body)
    })
}
function f1(responseText){}
function f2(responseText){}
myButton.addEventListener('click',(e)=>{
  let Promise =  window.jQuery.ajax({
            url: '/xxx',
            method:'get',
            headers:{
                'content-type':'application/x-www-form-urlencoded',
                'frank':'18'
            },
        })
        Promise.then(
            (text)=>{console.log(text)}, //成功就调这个函数
            (request)=>{console.log(request)} //失败
            )   
})

/*  ajax  如果要符合 promise 写法， reeturn 一个 new Promise ，
 把要做的事情放在 new Promise 里面。成功了就调 resolve，失败就调 reject 。
 Promise  会暴露一个 then 的 API  。 
 then 接受两个函数，如果成功了 会调用第一个函数；
 如果失败了 会调用第二个函数。 */


window.Promise = function(fn){ //window.Promise 等于一个函数，并接受一个函数,返回一个带 then 的哈希
    // ...
    return{
        then: function(){}
    }
}// 调用  then