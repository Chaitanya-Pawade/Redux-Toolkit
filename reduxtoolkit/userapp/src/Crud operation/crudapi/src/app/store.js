import { configureStore } from "@reduxjs/toolkit";
// import  gitUser  from "../features/getUserSlice";
import userDetail  from "../features/userDetailsSlice";

export const store = configureStore({
    reducer : {
        app : userDetail ,
    }
})






// export const store = configureStore({
//     reducer : {
//         app : gitUser
//     } ,
// })