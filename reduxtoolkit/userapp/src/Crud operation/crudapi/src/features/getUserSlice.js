import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getAllData = createAsyncThunk("gitUsers" , async() => {
    const response = await fetch("https://api.github.com/users");
    const result = response.json();
    return result;
})

export const gitUser = createSlice({
    name : "gitUser",
    initialState : {
        users : [],
        loading : false,
        error : null,
    },
   reducers: {
    deleteAllUsers(state,action){
        state.users =[]
        
    },
   },
    extraReducers : (builder) => {
        builder.addCase(getAllData.pending,(state) => {
            state.loading = true;
        })
        builder.addCase(getAllData.fulfilled ,(state,action) => {
            state.loading = false;
            state.users = action.payload;
        } )
        builder.addCase(getAllData.rejected , (state,action) => {
            state.loading = true;
            state.error = action.payload;
        } )
    }
})

export default gitUser.reducer;
export const {deleteAllUsers} = gitUser.actions;



//? app.js

// import logo from "./logo.svg";
// import "./App.css";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllData } from "./features/getUserSlice";
// import { deleteAllUsers } from "./features/getUserSlice";

// function App() {
//   const dispatch = useDispatch();

//   const data = useSelector((state) => {
//     console.log("state..", state.app);
//     return state.app;
//   });

//   const clearData = () => {
//     console.log();
//     dispatch(deleteAllUsers());
//   };
//   return (
//     <div className="App">
//       <h2>Fetch data in redux toolkit</h2>
//       <button onClick={() => dispatch(getAllData())}>Get Data</button>
//       <button onClick={clearData}>Clear Data</button>
//       {data.users.map((user, id) => {
//         return (
//           <p key={id}>
//             {user.id} {user.login}
//           </p>
//         );
//       })}
//     </div>
//   );
// }

// export default App;
