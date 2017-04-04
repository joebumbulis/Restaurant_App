import {
    createStore
} from 'redux';
import
homeView
from './home_view.js';


export default function app() {
    const initialState = {
        menu: [],
        order: [],
        view: homeView
    };
    // console.log(initialState.view);



    console.log(createStore(function(state = [], action) {
        return state;
    }));
    const urlFancy = 'https://tiy-austin-front-end-engineering.github.io/restaurantApi/fancy.json/';
    const urlCafe = 'https://tiy-austin-front-end-engineering.github.io/restaurantApi/cafe.json/';
    const urlPub = 'https://tiy-austin-front-end-engineering.github.io/restaurantApi/pub.json';




    const appReducer = function(state, action) {
        if (state === undefined) {
            state = initialState;
        }
        switch (action.type) {
            case "TESTING":
                console.log("It works!");
                console.log(state);
                return state

            default:
                return state;

        };

    }
    const store = createStore(appReducer)

    const render = function() {
        let state = store.getState();
        console.log(state);
        $('#app').html(state.view(store))
    };

    store.subscribe(render);

    store.dispatch({
        type: "TESTING",
    });
}
