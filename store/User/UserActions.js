export const SET_USER = "SET_USER";

export const setUserAction = (action) => {
  return {
    type: SET_USER,
    payload: {
      user: "demo_users",
      pwd: "user_pwds",
    },
  };
};

