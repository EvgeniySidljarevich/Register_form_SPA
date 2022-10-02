import {applyMiddleware, compose, createStore} from "redux";
import {reducer} from "./rootReducer";
import {initialState} from "./initialState";

const middlewares: any = [];
const enhancers = [(window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()];
const composeEnhancers = compose(applyMiddleware(...middlewares), ...enhancers);

export const store = createStore(reducer, initialState as any, composeEnhancers);