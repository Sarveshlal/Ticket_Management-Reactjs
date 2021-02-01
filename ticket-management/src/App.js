import React, { useState, Fragment } from "react";
import AddTicket from "./addTicket";
import EditTicket from "./editTicket";
import TicketTable from "./table";

const App = () => {
  const ticketData = [{ id: 1, name: "sarvesh", query: "sarveshlal" }];

  const refresh = { id: null, name: "", query: "" };

  const [tickets, setTickets] = useState(ticketData);
  const [current, setCurrent] = useState(refresh);
  const [editing, setEditing] = useState(false);

  const addTicket = (ticket) => {
    ticket.id = tickets.length + 1;
    setTickets([...tickets, ticket]);
  };

  const deleteTicket = (id) => {
    setEditing(false);

    setTickets(tickets.filter((ticket) => ticket.id !== id));
  };

  const updateTicket = (id, updatedTicket) => {
    setEditing(false);

    setTickets(
      tickets.map((ticket) => (ticket.id === id ? updatedTicket : ticket))
    );
  };

  const editRow = (ticket) => {
    setEditing(true);

    setCurrent({ id: ticket.id, name: ticket.name, query: ticket.query });
  };

  return (
    <div className="container p-4">
      <h1>Ticket Management</h1>
      <div>
        {editing ? (
          <Fragment>
            <h2>Edit Ticket</h2>
            <EditTicket
              editing={editing}
              setEditing={setEditing}
              current={current}
              updateTicket={updateTicket}
            />
          </Fragment>
        ) : (
          <Fragment>
            <h2>Add ticket</h2>
            <AddTicket addTicket={addTicket} />
          </Fragment>
        )}
      </div>
      <div>
        <h2>View Ticket</h2>
        <TicketTable
          tickets={tickets}
          editRow={editRow}
          deleteTicket={deleteTicket}
        />
      </div>
    </div>
  );
};
export default App;
