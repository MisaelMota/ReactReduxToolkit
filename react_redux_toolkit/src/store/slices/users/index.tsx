import { User,UserState } from "./Interfaces/userInterfaces";
//redux
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
//axios
import axios from "axios";


const initialState: UserState ={
  users:[],
  status:'idle',
  error: null,
};



export const fetchUsers = createAsyncThunk("users/fetchUsers",
  async () => {
    const response = await axios.get<User[]>('https://reqres.in/api/users?per_page=12')
    console.log(response.data);
    return response.data.data
  }
)

  
export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'idle';
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        console.log('fallo');
      });
  }
}
)





export default userSlice.reducer;


