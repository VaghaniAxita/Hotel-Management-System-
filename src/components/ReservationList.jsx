import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchReservations } from "../redux/actions/reservationActions";

const ReservationList = () => {
    const dispatch = useDispatch();
    const { reservations, loading, error } = useSelector((state) => state.reservations);

    useEffect(() => {
        dispatch(fetchReservations());
    }, [dispatch]);

    if (loading) return <p>Loading reservations...</p>;
    if (error) return <p>Error loading reservations: {error}</p>;

    return (
        <div>
            <h2>Reservations</h2>
            {reservations.length === 0 ? (
                <p>No reservations available.</p>
            ) : (
                <ul>
                    {reservations.map((reservation) => (
                        <li key={reservation.id}>
                            Room: {reservation.roomName}, Guest: {reservation.guestName}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ReservationList;
