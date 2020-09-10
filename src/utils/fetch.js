export default {
    //GET请求
    get(url, data = null) {
        // return this.ajax('GET', url, null);
        return this.fetch('GET', url, data);
    },
 
    //POST请求
    post(url, data = null) {
        // return this.ajax('POST', url, data);
        return this.fetch('POST', url, data);
    },
 
    //PUT请求
    put(url, data = null) {
        // return this.ajax('PUT', url, data);
        return this.fetch('PUT', url, data);
    },
 
    //Delete请求
    del(url, data = null) {
        // return this.ajax('DELETE', url, data);
        return this.fetch('DELETE', url, data);
    },
 
    ajax(method, url, data) {
        return new Promise((resolve, reject) => {
 
            let xhr = new XMLHttpRequest, params = [];
            xhr.responseType = 'json';// 指定返回类型
 
            xhr.onload = () => {
                switch (xhr.status) {
                    case 200: resolve(xhr.response);break;
                    case 204: resolve();break;
                    case 401:// 401登录失败处理
                        //do something
                        reject();
                        break;
                    default: reject({status: xhr.status, res: xhr.response});
                }
            };
             
            if (data) {// 将参数编码成表单的键值对形式
                for (let k in data) params.push(`${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`);
                data = params.join('&');
            }
            xhr.open(method, url, true);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded;charset=utf-8');// 设置content-type
            xhr.withCredentials = true;// 支持跨域发送cookies
            xhr.send(data);
        });
    },
 
    fetch(method, url, data) {
 
        let params = [], init = {
            method,
            mode: 'cors',
            headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'},
            credentials: 'include',// 支持跨域发送cookies
        };
         
        if (data) {// 将参数编码成表单的键值对形式
            for (let k in data) params.push(`${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`);
 
            if (method === 'GET') {
                url += '?' + params.join('&');
            } else {
                init.body = params.join('&');
            }
        }
 
        return fetch(url, init).then(e => {
            switch (e.status) {
                case 200: return e.json();
                case 204: break;
                case 401:// 401登录失败统一处理
                    //do something
                    return Promise.reject();
                case 403: return e.json().then(e => Promise.reject(e));// 服务端主动抛出错误
                default: return Promise.reject({status_code: 500, message: '服务器繁忙, 请稍后再试'});
            }
        })
    }
}