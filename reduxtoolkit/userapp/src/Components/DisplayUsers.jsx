import { useDispatch, useSelector } from "react-redux";
;
import { MdDeleteForever } from "react-icons/md";

import { removeUser } from "../Store/Slices/UserSlice";

const DisplayUsers = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state.users;
  });

  console.log(data);

  const deleteUser = (id) => {
    dispatch(removeUser(id));
  };

  return (
    <>
      {data.map((user, id) => {
        return (
          <li key={id}>
            {user}
            <button className="btn-delete" onClick={() => deleteUser(id)}>
              <MdDeleteForever className="delete-icon" />
            </button>
          </li>
        );  
      })}
    </>
  );
};

export default DisplayUsers;
