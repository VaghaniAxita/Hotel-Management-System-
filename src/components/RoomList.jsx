import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRooms } from "../redux/actions/roomActions";
import RoomDetails from "./RoomDetails";

const RoomList = () => {
    const dispatch = useDispatch();
    const { rooms, loading, error } = useSelector(state => state.rooms);

    useEffect(() => {
        dispatch(fetchRooms());
    }, [dispatch]);

    if (loading) return <p>Loading rooms...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h2>Available Rooms</h2>
            <div>
                {rooms.length > 0 ? (
                    rooms.map(room => <RoomDetails key={room.id} room={room} />)
                ) : (
                    <p>No rooms available</p>
                )}
            </div>
        </div>
    );
};

export default RoomList;
