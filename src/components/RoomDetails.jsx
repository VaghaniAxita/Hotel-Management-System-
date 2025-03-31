import React from "react";

const RoomDetails = ({ room }) => {
    return (
        <div style={{ border: "1px solid #ddd", padding: "10px", margin: "10px" }}>
            <h3>{room.name}</h3>
            <p>Type: {room.type}</p>
            <p>Price: ${room.price}/night</p>
        </div>
    );
};

export default RoomDetails;
