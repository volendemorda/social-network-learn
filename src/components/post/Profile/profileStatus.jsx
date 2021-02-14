import React, { useEffect, useState } from "react";


const ProfileStatus = (props) => {
  const [editmode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);
  const doubleClickHandler = () => setEditMode(true);
  const closeHandler = () => {
    setEditMode(false);
  };
  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);
  const onChangeHandler = (event) => setStatus(event.currentTarget.value);
  return (
    <>
      {editmode ? (
        <input
          type="text"
          onBlur={closeHandler}
          value={status}
          onChange={onChangeHandler}
        />
      ) : (
        <span onDoubleClick={doubleClickHandler}>
          {status || "нет статуса..."}
        </span>
      )}
    </>
  );
};



export default ProfileStatus;
