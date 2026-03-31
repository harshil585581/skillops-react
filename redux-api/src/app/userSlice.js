import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// 🔥 API call
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return response.json();
});

const userSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder
      // pending
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })

      // fulfilled
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })

      // rejected
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = "Failed to fetch users";
      });
  },
});

export default userSlice.reducer;
