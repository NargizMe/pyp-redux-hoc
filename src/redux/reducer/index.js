export const reducerCustomer = (state = [], action) => {
    
    switch(action.type){
        case "ADD_TO_FAVORITES":
            return [...state, action.payload];

        case 'EMPTY_FAVORITES':
            return [];
        
        default:
            return state;
    }
}