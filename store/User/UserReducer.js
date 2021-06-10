import { SET_USER } from "./UserActions";

const intialState = {
  user: "",
  pwd: "",
};

const userReducer = (state = intialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload.user,
        pwd: action.payload.pwd,
      };
    default:
      return { ...state };
  }
};

export default userReducer;