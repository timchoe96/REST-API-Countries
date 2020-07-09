export const countryDetail = (state='',action) => {
    switch(action.type){
        case 'FLAG':
        return action.payload

        default:
        return state
    }
}