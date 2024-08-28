import categoryGetReducer from "./redux/categoryListSlice";
import commoditGetReducer from "./redux/listCommodities";
import TruckGetReducer from './redux/listTruck';
import ShipmentGetReducer from './redux/listShipments';
import UOMGetReducer from './redux/UOMlist';
import countryGetReducer from './redux/CountryList';
import cityGetReducer from './redux/CityListSlice';
import stateGetReducer from './redux/StateListSlice';
import PromotionGetReducer from './redux/listPromotion';

// partners
import partnerGetReducer from './redux/Partner/partnerList';


// driver
import DriverGetReducer from './redux/Drivers/driverList';
import  ItemsGetReducer from "./redux/Items/ItemsList";




import { configureStore } from "@reduxjs/toolkit";

import { persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import { combineReducers } from "redux";

// console.log(combineReducers);
// import createTeamDepartmentSlice from "redux/createTeamDepartmentSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  categoryList: categoryGetReducer,
  commoditiesList: commoditGetReducer,
  TruckList: TruckGetReducer,
  ShipmentList: ShipmentGetReducer,
  UOMList: UOMGetReducer,
  countryList: countryGetReducer,
  cityList: cityGetReducer,
  stateList: stateGetReducer,
  PromotionList: PromotionGetReducer,
  // partners
  PartnersList: partnerGetReducer,
  // driver
  DriverList: DriverGetReducer,
  ItemsList: ItemsGetReducer,
});


const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

// const persistor = persistStore(store);

// export store
