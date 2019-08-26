// Import redux
import { createStore } from 'redux';

const initialState = {
    cars: [],
    loading: true,
    scrollY: 0,
    reduceNav: false,
    hideNav: false,
}

// Actions
export const actions = {
    setCars: (cars) => {
        return {
            type: 'SET_CARS',
            payload: { 
                cars: cars,
                loading: false,
            }
        }
    },
    setScroll: (scrollY) => {
        return {
            type: 'SET_SCROLL',
            payload: { 
                scrollY: scrollY,
            }
        }
    },
}
    
// Reducers: definen como cambia el estado para cada acción: estado + acción ==> acción
function charReducer(state, action) {
    let newState = {};
    switch (action.type) {
        case "SET_CARS":
            newState = {...state};
            newState.cars = action.payload.cars;
            if (!action.payload.cars || action.payload.cars.length < 1) {
                newState.loading = true;
            } else {
                newState.loading = action.payload.loading;
            }
            return newState;
        case "SET_SCROLL":
            let direction;
            newState = {...state};
            if (state.scrollY > action.payload.scrollY ) direction = 'top';
            else if(state.scrollY < action.payload.scrollY ) direction = 'bottom';
            newState.scrollY = action.payload.scrollY;
            if (newState.scrollY === 0) {
                newState.reduceNav = false;
                newState.hideNav = false;
            } else if (direction === 'bottom') {
                newState.reduceNav = true;
                newState.hideNav = false;
            } else if (direction === 'top') {
                newState.hideNav = true;
            }
            return newState;
        default:
            return state;
    }
}

// Store
export const store = createStore(charReducer, initialState);

// Debug 
window.store = store;
window.actions = actions;