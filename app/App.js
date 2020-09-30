import React from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { enableScreens } from "react-native-screens";

import MainNavigator from "./navigation/MainNavigator";
import friendsReducer from "./store/reducers/friends";

enableScreens();

const rootReducer = combineReducers({
    friends: friendsReducer
});

// TODO REMOVE (DEBUGGING ONLY)
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(
//     rootReducer,
//     applyMiddleware(thunkMiddleware),
//     composeWithDevTools()
// );

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunkMiddleware)));

export default function App() {
    return (
        <Provider store={store}>
            <MainNavigator />
        </Provider>
    );
}
