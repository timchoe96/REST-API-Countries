export const switching= (state={textColor:'hsl(200, 15%, 8%)',backgroundColor:'hsl(0, 0%, 98%)',elementColor:'hsl(0, 0%, 100%)',inputColor:'hsl(0, 0%, 52%)',inputClass:'inputLight'},action) => {
switch(action.type){
    case 'DARK':
    return {...state,textColor:'hsl(0, 0%, 100%)',backgroundColor:'hsl(207, 26%, 17%)',elementColor:'hsl(209, 23%, 22%)',inputColor:'hsl(0, 0%, 100%)',inputClass:'inputDark'}

    case 'LIGHT':
    return {...state,textColor:'hsl(200, 15%, 8%)',backgroundColor:'hsl(0, 0%, 98%)',elementColor:'hsl(0, 0%, 100%)',inputColor:'hsl(0, 0%, 52%)',inputClass:'inputLight'}

    default:
    return state;
}
}