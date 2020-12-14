import {createStore} from 'redux'


const rootReducer = (state = {}) => {
    return {
        ...state
    }
}

const initial = {}

export function configureStore() {
    return createStore(rootReducer, initial)
}
