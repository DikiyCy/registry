// объединение всех редьюсеров
import { combineReducers } from "redux";
import { authReduser } from './auth/redusers.js';
import { infoReduser } from './info/redusers.js';

export default combineReducers({
    auth: authReduser,
    info: infoReduser,
});
