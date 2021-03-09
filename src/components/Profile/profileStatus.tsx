import React, { useEffect, useState } from "react";


type propsType = {
  status: string | null
  updateProfileStatusThunkCreator: (status: string | null)=>Promise<void>
}

const ProfileStatus:React.FC<propsType> = (props) => {
  const [editmode, setEditMode] = useState<boolean>(false)
  const [status, setStatus] = useState<string | null>(props.status)
  const doubleClickHandler = () => setEditMode(true)
  const closeHandler = () => {
    props.updateProfileStatusThunkCreator(status)
    setEditMode(false);
  };
  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => setStatus(event.currentTarget.value);
  return (
    <>
      {editmode ? (
        <input
          type="text"
          onBlur={closeHandler}
          value={status || ' '}
          onChange={onChangeHandler}
          autoFocus={true}
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
