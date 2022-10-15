
const initialState = {
    userDetailes: [],
    totalAmount: 0,
    amountAddedSuccess: false
  };
  

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case "CREAT_USER_DATA":
            return {
                ...state,
                userDetailes: action.payload
              }
        case "USER_TOTAL_AMOUNT":
            return {
                ...state,
                totalAmount: action.payload
              }
        case "AMOUNT_ADDED_USER":
            return {
                    ...state,
                    amountAddedSuccess: action.payload
                }
        case "SET_IS_ADMIN":
            console.log('inredu',action.payload)
                return {
                         ...state,
                            userDetailes:{
                                ...state.userDetailes,isAdmin:action.payload
                    }
                }
        default: 
            return state
    }
}

export default userReducer