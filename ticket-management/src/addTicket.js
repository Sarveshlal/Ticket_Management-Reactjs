import React, { useState } from "react";

const AddTicket = (props) => {
  const refresh = { id: null, name: "", query: "" };
  const [ticket, setTicket] = useState(refresh);

  const changeTicket = (event) => {
    const { name, value } = event.target;

    setTicket({ ...ticket, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!ticket.name || !ticket.query) return;

        props.addTicket(ticket);
        setTicket(refresh);
      }}
    >
      <div className="form-group">
        <label for="name">Name</label>
        <input
          id="name"
          className="form-control"
          type="text"
          name="name"
          value={ticket.name}
          onChange={changeTicket}
        />
      </div>
      <div className="form-group">
        <label for="query">Query</label>
        <input
          id="query"
          className="form-control"
          type="text"
          name="query"
          value={ticket.query}
          onChange={changeTicket}
        />
      </div>
      <button type="submit" className="btn btn-outline-success">
        Add new Ticket
      </button>
    </form>
  );
};

export default AddTicket;
