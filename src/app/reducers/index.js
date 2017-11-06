import { combineReducers } from 'redux';
import menu from './layout/Header/menu';

const reducersRegistry = {
  menu: menu
};

export default function rootReducer(red) {
  let reducers = {};
  for (let r of red) {
    reducers[r] = reducersRegistry[r];
  }
  return combineReducers({ menu });
}