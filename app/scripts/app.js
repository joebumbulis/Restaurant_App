import {
    createStore
} from 'redux';
import { homeView } from './home_view.js';
export default function app() {

    console.log(createStore(function(state = [], action) {
        return state;
    }));
    const urlFancy = 'https://tiy-austin-front-end-engineering.github.io/restaurantApi/fancy.json/';
    const urlCafe = 'https://tiy-austin-front-end-engineering.github.io/restaurantApi/cafe.json/';
    const urlPub = 'https://tiy-austin-front-end-engineering.github.io/restaurantApi/pub.json';

    const initialState = {
        order: [],
        view: homeView
    }

    const reducer = function(currentState, action) {
        if (currentState = undefined) {
            return initialState
        }

        // switch(action.type) {
        //   case
        // }
    }



}
