let initialstate = {
    count: 0
}


function reducer(state = initialstate, action){
    console.log('action은',action)
    if(action.type === "INCREASE"){
        return { ...state,count: state.count + 1 };
        //여러 객체중 count만 바꾼다 라는 뜻으로 ...해줌
    }
    switch(action.type){
        case "INCREACE":
            return { ...state,count: state.count + 1 };
        default:
    }
    return { ...state };
}

export default reducer