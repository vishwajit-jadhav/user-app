import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchUsersList } from "./userCrud";

export const getUsers = createAsyncThunk(
  "user/getUsers",
  async (payload, { dispatch, rejectWithValue }) => {
    try {
      const res = await fetchUsersList();
      if (res.status) {
        return res.data;
      } else {
        throw new Error(res.data?.message || res?.message);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    userList: [],
    loading:false,
  },
  reducers: {
    //this reducer add newly dispached payload into exixsting data
    AddNewUser: (state, action) => {
      state.userList = [...state.userList, action.payload];
    },

    //this reducer will take id and filter out data by id
    removeUser: (state, action) => {
      const users = state.userList.filter(
        (e, index) => e.id !== action.payload
      );
      state.userList = users;
    },
  },

  extraReducers: {
    //This will excecute when api in pending state
    [getUsers.pending]: (state, action) => {
      state.loading = true;
    },
    //Success of api call and set data
    [getUsers.fulfilled]: (state, action) => {
      state.loading = false;

      //Removed first 7 secords from response 
      state.userList = action.payload?.slice(0,3);
    },

    //this will excecute on failure of api
    [getUsers.rejected]: (state, error) => {
      state.userList = [];
      state.loading = false;
    },
  },
});
export const { AddNewUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
