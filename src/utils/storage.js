class StorageApi {
    constructor() {
        this._s = localStorage
    }

    static instance(...args) {
        // 单例写法
        let name = this.name.toLowerCase()
        if (this[name] === undefined) {
            this[name] = new this(...args)
        }
        return this[name]
    }


    getValue(key, defaultValue = '') {
        const v = JSON.parse(localStorage.getItem(key))
        return v === null ? defaultValue : v
    }

    setValue(k, v) {
        const s = JSON.stringify(v)
        localStorage.setItem(k, s)
    }
}

// const _storage = new StorageApi()
// export default _storage

export default StorageApi