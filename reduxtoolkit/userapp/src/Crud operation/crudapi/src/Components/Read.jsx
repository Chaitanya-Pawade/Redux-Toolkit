import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showUser } from "../features/userDetailsSlice";
import CustomModal from "./CustomModal";
import { deleteUser } from "../features/userDetailsSlice";
import { Link } from "react-router-dom";

function Read() {
  const dispatch = useDispatch();

  const [radioData, setRadioData] = useState("");

  const { users, loading, searchData } = useSelector((state) => state.app);

  const [id, setId] = useState();

  const [showPopUp, setShowPopUp] = useState(false);

  useEffect(() => {
    dispatch(showUser());
  }, []);

  if (loading) {
    return <h2>Loading</h2>;
  }
  return (
    <div className="text-center">
      {showPopUp && (
        <CustomModal
          id={id}
          showPopUp={showPopUp}
          setShowPopUp={setShowPopUp}
        />
      )}
      <h2>Read</h2>
      <div className="mb-3">
        <input
          className="form-check-input"
          name="gender"
          checked={radioData === ""}
          type="radio"
          onChange={() => setRadioData("")}
        />
        <label className="form-check-label">All</label>
        <input
          className="form-check-input"
          name="gender"
          type="radio"
          checked={radioData === "Male"}
          value="Male"
          onChange={(e) => setRadioData(e.target.value)}
        />
        <label className="form-check-label">Male</label>
      </div>
      <div className="mb-3">
        <input
          className="form-check-input"
          name="gender"
          type="radio"
          checked={radioData === "Female"}
          value="Female"
          onChange={(e) => setRadioData(e.target.value)}
        />
        <label className="form-check-label">Female</label>
      </div>

      <div>
        {users &&
          users
            .filter((ele) => {
              if (searchData.length === 0) {
                return ele;
              } else {
                return ele.name
                  .toLowerCase()
                  .includes(searchData.toLowerCase());
              }
            })
            .filter((ele) => {
              if (radioData === "Male") {
                return ele.gender === radioData;
              } else if (radioData === "Female") {
                return ele.gender === radioData;
              } else {
                return ele;
              }
            })
            .map((ele) => (
              <div key={ele.id} className="card w-50 mx-auto my-2">
                <div className="card-body">
                  <h5 className="card-title">{ele.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{ele.email}</h6>
                  <p className="card-text">{ele.age}</p>
                  <button
                    onClick={() => [setId(ele.id), setShowPopUp(true)]}
                    className="card-link"
                  >
                    view
                  </button>
                  <Link to={`/edit/${ele.id}`} className="card-link">
                    edit
                  </Link>
                  <Link
                    onClick={() => dispatch(deleteUser(ele.id))}
                    className="card-link "
                  >
                    delete
                  </Link>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}

export default Read;
