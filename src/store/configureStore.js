import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import urlDetails from "../reducers/urlDetails"

const persistConfig = {
    key: 'root',
    storage,
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedReducer = persistReducer(persistConfig, combineReducers({
    urlDetails: urlDetails
})
)

export default () => {
    let store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))
    let persistor = persistStore(store)
    return { store, persistor }
}
