// src/redux/reducers/reservationReducer.js
const initialReservationState = {
    reservations: [],
    loading: false,
    error: null
};

export const reservationReducer = (state = initialReservationState, action) => {
    switch (action.type) {
        case 'ADD_RESERVATION_SUCCESS':
            return { ...state, reservations: [...state.reservations, action.payload] };
        case 'ADD_RESERVATION_ERROR':
            return { ...state, error: action.payload };
        default:
            return state;
    }
};
