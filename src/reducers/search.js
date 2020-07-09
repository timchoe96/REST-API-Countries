export const searchResult = (state='',action) => {
    switch(action.type){
        case 'COUNTRY':
        return action.payload

        default:
        return state;
    }
}