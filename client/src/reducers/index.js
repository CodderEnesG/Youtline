import {combineReducers} from "redux"
import packets from './packets';
import periods from './periods';
import courses from "./courses"

import auth from "./auth"
import users from "./users"


export const reducers = combineReducers({ auth , packets , users, periods , courses });
    // kullanacağımız reducers'ı buraya ekleriz