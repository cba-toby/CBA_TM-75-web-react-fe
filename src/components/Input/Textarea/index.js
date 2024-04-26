import React from "react";

function SummaryInput({ summary }) {
  return (
    <div className="row mb-3">
      <label htmlFor="inputText" className="col-sm-2 col-form-label">
        Tóm tắt
      </label>
      <div className="col-sm-10">
        <div className="form-floating">
          <textarea
            className="form-control"
            placeholder="Tóm tắt"
            id="floatingTextarea"
            style={{ height: "100px" }}
            value={summary} // Bind summary value to textarea value
          ></textarea>
          <label htmlFor="floatingTextarea">Address</label>
        </div>
      </div>
    </div>
  );
}

export default SummaryInput;
