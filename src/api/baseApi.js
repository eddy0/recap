// import _storage from '../utils/storage'
import axios from 'axios'
import {baseUrl} from '../config'
import {log} from '../utils/utils'


class FetchApi {
    constructor() {
        this.baseUrl = '/api/v1'
        this.tokenKey = 'web'
        // this.userTokenKey = _storage.getValue('userInfo', '')
        this.axios = axios.create({
            baseURL: baseUrl,
            timeout: 10000,
            headers: {'Access-Control-Allow-Origin': '*'}
        })
        this.init()
    }

    init() {
        this.axios.interceptors.request.use((config) => {
            // config.headers = { ...config.headers, auth_token: getAuthToken() };
            // you can also do other modification in config
            return config
        }, function (err) {
            return Promise.reject(err)
        })

        this.axios.interceptors.response.use((response) => {
            // config.headers = { ...config.headers, auth_token: getAuthToken() };
            // you can also do other modification in config
            let {code} = response.data
            if (code === undefined || code !== 202) {
                let {code, message} = response.data

                log(message, response.data)
                // Modal.error({
                //     title: code || null,
                //     content: message,
                //     maskClosable: true
                // })
                return
            }
            return response.data
        }, function (error) {
            if (error) {
                let err = error.toJSON()
                // Modal.error({
                //     title: err.name || null,
                //     content: err.message,
                //     maskClosable: true
                // })
            }
            return Promise.reject(error)
        })
    }

    static instance(...args) {
        // 单例写法
        let name = this.name.toLowerCase()
        if (this[name] === undefined) {
            this[name] = new this(...args)
        }
        return this[name]
    }

    judgeTokenKey(useUser) {
        const that = this
        return useUser ? that.userTokenKey : that.tokenKey
    }

    get(path, useUserToken = false) {
        const that = this
        const k = that.judgeTokenKey(useUserToken)
        const url = `${this.baseUrl}${path}`
        return this.axios.get(url)
    }

    delete({path, useUserToken = false,}) {
        const that = this
        const k = that.judgeTokenKey(useUserToken)
        const url = `${this.baseUrl}${path}`
        return this.axios.delete(url)
    }

    post({path, data, useUserToken = false,}) {
        const that = this
        const k = that.judgeTokenKey(useUserToken)
        const url = `${this.baseUrl}${path}`
        log(url)
        return this.axios.post(url, data)
    }

    add(data) {
        const path = '/add'
        return this.post({path, data})
    }
}

export default FetchApi