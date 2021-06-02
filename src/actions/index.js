import { createAction } from "@reduxjs/toolkit";

const LOGIN = "login";



const loginAction = createAction(LOGIN);
const login = {};

export {
  LOGIN,
  login,
};
