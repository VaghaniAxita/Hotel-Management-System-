import axios from 'axios';

export const makeReservation = (reservationData) => async dispatch => {
    try {
        const response = await axios.post('http://localhost:5000/reservations', reservationData);
        dispatch({ type: 'ADD_RESERVATION_SUCCESS', payload: response.data });
    } catch (error) {
        dispatch({ type: 'ADD_RESERVATION_ERROR', payload: error.message });
    }
};
