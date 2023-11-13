import { createSlice } from "@reduxjs/toolkit";

const initialState={
         users:[
               {id:1, name:"Pappu Kushwaha",age:23,email:'kumarpappu8610@gmail.com'},
               {id:2, name:"Ashok kumar",age:22,email:'akumar2015@gmail.com'},
               {id:3, name:"Vinod kushwaha",age:21,email:'Vinod2015@gmail.com'},
               {id:4, name:"Manjay kushwaha",age:25,email:'Mk2025@gmail.com'},
               {id:5, name:"Raushan kushwaha",age:24,email:'Rk2025@gmail.com'},

         ]
}
const usersSlice=createSlice({
           name:"users",
           initialState,
           reducers:{
                  
           }           
})

export default usersSlice.reducer;