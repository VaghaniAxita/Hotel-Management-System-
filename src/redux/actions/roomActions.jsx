import axios from "axios";

export const fetchRooms = () => async (dispatch) => {
    dispatch({ type: "FETCH_ROOMS_REQUEST" });

    try {
        const response = await axios.get("http://localhost:5000/rooms");
        dispatch({ type: "FETCH_ROOMS_SUCCESS", payload: response.data });
    } catch (error) {
        dispatch({ type: "FETCH_ROOMS_ERROR", payload: error.message });
    }
};
