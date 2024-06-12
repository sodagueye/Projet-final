import React, { useState } from "react";
import "./ReservationTable.css";

const ReservationTable = () => {
  const [tables, setTables] = useState([
    { id: 1, reserved: false },
    { id: 2, reserved: false },
    { id: 3, reserved: false },
    { id: 4, reserved: false },
    { id: 5, reserved: false },
    { id: 6, reserved: false },
    { id: 7, reserved: false },
    { id: 8, reserved: false },
    { id: 9, reserved: false },
    { id: 10, reserved: false },
    { id: 11, reserved: false },
    { id: 12, reserved: false },
  ]);

  const [reservedTables, setReservedTables] = useState([]);

  const handleReserveTable = (tableId) => {
    setTables((prevTables) =>
      prevTables.map((table) => {
        if (table.id === tableId) {
          return { ...table, reserved: true };
        }
        return table;
      })
    );
    setReservedTables((prevReservedTables) => [...prevReservedTables, tableId]);
  };

  const handleCancelReservation = (tableId) => {
    setTables((prevTables) =>
      prevTables.map((table) => {
        if (table.id === tableId) {
          return { ...table, reserved: false };
        }
        return table;
      })
    );
    setReservedTables((prevReservedTables) =>
      prevReservedTables.filter((id) => id !== tableId)
    );
  };

  


  return (
    <div className="container-fluid reservation-head">
      <div className="row available-table ">
        <h2>Reservez votre table en cliquant sur reserver</h2>
        {tables.map((table) => (
          <div className="col-md-3 mx-auto" id="table-A" key={table.id}>
            <span>{table.id}</span>
            {table.reserved ? (
              <button
                className="btn btn-danger"
                onClick={() => handleCancelReservation(table.id)}
              >
               Annuler
              </button>
            ) : (
              <button
                className="btn btn-success"
                onClick={() => handleReserveTable(table.id)}
              >
                Reserver
              </button>
            )}
          </div>
        ))}
      </div>

      <div className="row reserved-table">
        <h2>Tables déjà reservées</h2>
        {reservedTables.map((tableId) => (
          <div className="col-md-3 mx-auto" id="table-C" key={tableId}>
            {tables.find((table) => table.id === tableId).id}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReservationTable;
