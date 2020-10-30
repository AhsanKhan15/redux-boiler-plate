
const INITIAL_STATE ={
    users:[
        {name:'Ali',email:'ali@gmai.com'}
    ]
}

export default (state = INITIAL_STATE , action)=>{
    switch (action.type) {
        case 'SETDATA':
            return({
                ...state,
                users:[...state.users,action.data]
            })
    
    }
return state;

}