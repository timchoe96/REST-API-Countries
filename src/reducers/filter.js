export const filter = (state = 'Filter by Region',action) => {
    switch(action.type){
        case 'LOCATION':
        return action.payload

    default:
        return state;
    }
}