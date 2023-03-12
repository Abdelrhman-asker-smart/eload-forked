import categoryGetReducer from "./redux/categoryListSlice";
import commoditGetReducer from "./redux/listCommodities";
import TruckGetReducer from './redux/listTruck';


import { configureStore } from "@reduxjs/toolkit";

import { persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import { combineReducers } from "redux";

console.log(combineReducers);
// import createTeamDepartmentSlice from "redux/createTeamDepartmentSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  categoryList: categoryGetReducer,
  commoditiesList: commoditGetReducer,
  TruckList: TruckGetReducer,


});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

// const persistor = persistStore(store);

// export store
