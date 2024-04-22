import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';


export const deposit = value => {
    return {
    type: 'balance/deposit',
    payload: value,
    }
}

const initialState = {
    balance: {
        value: 0,
    },
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'balance/deposit':
            return {
                balance: {
                    value: state.balance.value + action.payload,
                },
            };
    default:
    return state;
    }
};

export const store = createStore(rootReducer, devToolsEnhancer());
