import React from "react";
import { deleteAllUsers } from "../Store/Slices/UserSlice";
import { useDispatch } from "react-redux";

export const DeleteAllUser = () => {

  const dispatch = useDispatch();
  const clearUsers = () => {
    dispatch(deleteAllUsers())
  }
  return <div>
    <button className="btn delete-btn" onClick={clearUsers}>Delete All Users</button>
  </div>;
};