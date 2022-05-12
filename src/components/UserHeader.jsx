import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectToken } from "../utils/selectors";
import { sendEditedUserNames } from "../features/sendUser";
import { fetchOrUpdateUser } from "../features/getUser";

const UserHeader = ({ firstNameUser, surenameNameUser }) => {
  const [edit, setEdit] = useState(false);
  const [editedFirstName, seteditedFirstName] = useState("");
  const [editedLastName, seteditedLastName] = useState("");
  const editedUserNames = { firstName: editedFirstName, lastName: editedLastName };

  const token = useSelector(selectToken);

  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(sendEditedUserNames(token, editedUserNames));
    dispatch(fetchOrUpdateUser(token));
    setEdit(false);
  };

  return (
    <div className="header">
      <div className={edit ? "dispair-class" : "displayedheader"}>
        <h1>
          Welcome back
          <br />
          {firstNameUser} {surenameNameUser}!
        </h1>
        <button className="edit-button" onClick={() => setEdit(true)}>
          Edit Name
        </button>
      </div>
      <div className={edit ? "header-modifier" : "dispair-class"}>
        <h1>Welcome back</h1>
        <div className="modifier-container">
          <input type="text" placeholder={firstNameUser} onChange={(e) => seteditedFirstName(e.target.value)} />
          <input type="text" placeholder={surenameNameUser} onChange={(e) => seteditedLastName(e.target.value)} />

          <button className="edit-button" onClick={() => handleSubmit()}>
            Save
          </button>
          <button className="edit-button" onClick={() => setEdit(false)}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserHeader;
