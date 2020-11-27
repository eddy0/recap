import FetchApi from './baseApi'


class Consignee extends FetchApi {
    constructor() {
        super()
        this.baseUrl += '/consignee'
    }

}

const ConsigneeApi = Consignee.instance()

export {
    ConsigneeApi,
}