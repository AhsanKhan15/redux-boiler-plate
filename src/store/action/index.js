
const set_data = (data)=>{
    console.log("inside action",data);
    return(dispatch)=>{
        dispatch({type:'SETDATA',data:data})
    }
}

export{
    set_data
}