import FetchApi from './baseApi'


class Auth extends FetchApi {
    constructor() {
        super()
        // this.baseUrl = '/auth'   // api/v1/auth

    }

    auth(data) {
        let path = '/auth'
        return super.post({path, data})
    }

    login(data) {
        let path = '/login'
        return super.post({path, data})
    }

    register(data) {
        let path = '/register'
        return super.post({path, data})
    }

}

const AuthApi = Auth.instance()


export {
    AuthApi
}