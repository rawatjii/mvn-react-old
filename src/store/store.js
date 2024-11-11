import { configureStore } from "@reduxjs/toolkit";
import sideMenuReducer from '../redux/adminSidebarSlice'

const store = configureStore({
  reducer:{
    adminSideMenu:sideMenuReducer
  }
})

export default store;