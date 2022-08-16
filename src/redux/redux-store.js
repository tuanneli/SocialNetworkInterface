import {
  applyMiddleware,
  combineReducers, compose,
  legacy_createStore as createStore
} from "redux";
import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer} from "redux-form";
import appReducer from "./app-reducer";

const reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  sidebarPage: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: reducer,
  app: appReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware)));
// const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;