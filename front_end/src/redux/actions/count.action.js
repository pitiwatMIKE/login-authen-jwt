export const ADD = () => ({
    type: 'ADD',
})


export const addcount=()=>{
    return dispatch =>{
        dispatch(ADD())
    }
}
