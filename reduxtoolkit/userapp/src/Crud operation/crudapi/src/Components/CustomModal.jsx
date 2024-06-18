import React from 'react';
import './CustomModal.css';
import { useSelector } from 'react-redux';

function CustomModal({id , showPopUp , setShowPopUp}) {
    const noOfUsers = useSelector((state) => state.app.users);
    const singleUser = noOfUsers.filter((ele) => ele.id === id);
    console.log(singleUser);
    return (
        <div className='modalBackground'>
          <div className='modalContainer'>
            <button onClick={() => setShowPopUp(false)}>Close</button>
             <h2>{singleUser[0].name}</h2>
             <h2>{singleUser[0].email}</h2>
             <h2>{singleUser[0].age}</h2>
             <h2>{singleUser[0].gender}</h2>
            </div>  
        </div>
    );
}

export default CustomModal;