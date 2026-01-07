export const initialState = {
    cart: [],
    total: 0
};

export const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            const existingItem = state.cart.find(item => item.id === action.payload.id);

            if (existingItem) {
                return {
                    ...state,
                    cart: state.cart.map(item =>
                        item.id === action.payload.id
                            ? { ...item, qty: item.qty + 1 }
                            : item
                    ),
                    total: state.total + action.payload.price
                };
            } else {
                return {
                    ...state,
                    cart: [...state.cart, { ...action.payload, qty: 1 }],
                    total: state.total + action.payload.price
                };
            }
        case 'REMOVE_ITEM':
            const itemToRemove = state.cart.find(item => item.id === action.payload.id);
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.id),
                total: state.total - (itemToRemove.price * itemToRemove.qty)
            };

        case 'CLEAR_CART':
            return initialState;

        default:
            return state;
    }
};