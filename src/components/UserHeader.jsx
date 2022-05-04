import React, { useState } from "react";
const UserHeader = ({ firstNameUser, surenameNameUser }) => {
  const [edit, setEdit] = useState(false);
  return (
    <div className="header">
      <div className={edit ? "dispair-class" : "displayedheader"}>
        <h1>
          Welcome back
          <br />
          {firstNameUser} {surenameNameUser}!
        </h1>
        <button className="edit-button" onClick={() => (edit ? setEdit(false) : setEdit(true))}>
          Edit Name
        </button>
      </div>
      <div className={edit ? "header-modifier" : "dispair-class"}>
        <h1>Welcome back</h1>
        <div className="modifier-container">
          <input type="text" placeholder={firstNameUser} />
          <input type="text" placeholder={surenameNameUser} />

          <button className="edit-button" onClick={() => (edit ? setEdit(false) : setEdit(true))}>
            Save
          </button>
          <button className="edit-button" onClick={() => (edit ? setEdit(false) : setEdit(true))}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserHeader;
