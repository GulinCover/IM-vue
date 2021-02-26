import axios from "axios"

const local = "http://127.0.0.1:8000"
window.localStorage.setItem("user_id","11111111")

export function HttpGet(url,params=null, headers=null) {
    return axios.get(`${local}${url}`,
        {
            params,
            headers,
        }
    )
}

export function HttpPost(url,data=null, headers=null) {
    const userId = window.localStorage.getItem("user_id")

    return axios.post(
        `${local}${url}`,
        data,
        {
            headers:{
                'Content-Type':'application/json',
                'user_id': `${userId}`,
                ...headers
            },
        }
    )
}


export function merge(src, desc) {
    let key = Object.keys(desc)
    let value = Object.values(desc)
    let lst = src.split("?")
    lst = lst.filter(s=>s!=="")

    let kms = lst[1].split("&")
    kms = kms.filter(s=>s!=="")
    kms.forEach((it, k)=>{
        if (it.split("=")[0] === key.toString()) {
            kms[k] = key+"="+value
        }
    })
    let ret = ""
    kms.forEach(it=>{
        ret += it+"&"
    })
    return lst[0]+"?"+ret
}






