import {
    ADD_PLACE,
    DELETE_PLACE,
    SELECT_PLACE,
    DESELECT_PLACE
} from '../actions/actionTypes';

const initalState = { places: [], selectedPlace: null };

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case ADD_PLACE:
            return {
                ...state,
                places: state.places.concat({
                    key: new Date().getTime(),
                    name: action.placeName,
                    image: {
                        uri:
                            'https://www.popsci.com/sites/popsci.com/files/styles/1000_1x_/public/images/2018/06/edinburgh_meadows_2008_middle_meadow_walk_by_catharine_ward_thompson.jpg?itok=ysmDaSjD&fc=50,50'
                    }
                })
            };
        case DELETE_PLACE:
            return {
                ...state,
                places: state.places.filter(
                    place => place.key !== state.selectedPlace.key
                ),
                selectedPlace: null
            };
        case SELECT_PLACE:
            return {
                ...state,
                selectedPlace: state.places.find(
                    place => place.key === action.placeKey
                )
            };
        case DESELECT_PLACE:
            return {
                ...state,
                selectedPlace: null
            };
        default:
            return state;
    }
};

export default reducer;
