const initialState = {
    product: {
        data: []
    }
}

export const ElectronicProduct = (state = initialState, action) => {
    switch (action.type) {
        case 'PRODUCT_API_ELE':
            return {
                ...state,
                product: {
                    data: action.payload
                }
            }
        default: return state
    }
}