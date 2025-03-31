const initialRoomState = { rooms: [], loading: false, error: null };

export const roomReducer = (state = initialRoomState, action) => {
    switch (action.type) {
        case "FETCH_ROOMS_REQUEST":
            return { ...state, loading: true, error: null };
        case "FETCH_ROOMS_SUCCESS":
            return { ...state, rooms: action.payload, loading: false };
        case "FETCH_ROOMS_ERROR":
            return { ...state, error: action.payload, loading: false };
        default:
            return state;
    }
};
