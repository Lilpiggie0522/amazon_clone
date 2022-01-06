const initialState = {
    basket: [],
    user: null,
}

// Selector
export const getBaskeTotal = (basket) => 
// reduce functions
basket.reduce((amount, item) => item.price + amount, 0)

const reducer = (state, action) => {
    console.log("action: ", action)
    switch(action.type){
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case 'EMPTY_BASKET':
            return {
                ...state,
                basket: [],
            }

        case 'REMOVE_FROM_BASKET':
            // return {
            //     ...state,
            //     filter only asks for the thing that you want, in other words, if condtion is true, then include it in the new array or object.
            //     basket: state.basket.filter((item) => item.id !== action.id) ===> this is wrong it will remove everything with that id
            // }
            const index = state.basket.findIndex(
                (basketItem) => {
                    return(basketItem.id === action.id)
                }
            )

            let newBasket =[...state.basket];
            index >= 0? newBasket.splice(index, 1)
            :console.warn("Can't remove product id: ${action.id} as its not in basket")

            return {
                ...state,
                basket: newBasket,
            }

        case "SET_USER":
            return {
                ...state,
                user: action.user,
            }
            
        default:
            return state;
    }
}

export {initialState, reducer};