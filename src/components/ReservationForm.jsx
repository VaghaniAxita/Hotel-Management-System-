// src/components/ReservationForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { makeReservation } from '../redux/actions/reservationActions';

const ReservationForm = () => {
    const dispatch = useDispatch();
    const [reservation, setReservation] = useState({
        roomId: '',
        guestName: '',
        checkInDate: '',
        checkOutDate: ''
    });

    const handleChange = (e) => {
        setReservation({ ...reservation, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(makeReservation(reservation));
        alert("Room booked successfully!");
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Book a Room</h2>
            <label>Room ID:</label>
            <input type="number" name="roomId" value={reservation.roomId} onChange={handleChange} required />

            <label>Guest Name:</label>
            <input type="text" name="guestName" value={reservation.guestName} onChange={handleChange} required />

            <label>Check-in Date:</label>
            <input type="date" name="checkInDate" value={reservation.checkInDate} onChange={handleChange} required />

            <label>Check-out Date:</label>
            <input type="date" name="checkOutDate" value={reservation.checkOutDate} onChange={handleChange} required />

            <button type="submit">Reserve</button>
        </form>
    );
};

export default ReservationForm;
