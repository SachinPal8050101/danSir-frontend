
const initialState = {
    userDetailes: []
  };
  

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case "CREAT_USER_DATA":
            return {
                ...state,
                userDetailes: action.payload
              }
        default: 
            return state
    }
}

export default userReducer